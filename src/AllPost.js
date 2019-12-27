import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPosts, addPost, deletePost, updatePost, movePreviousPage, moveNextPage} from "./ActionTypes";
import PostForm from "./PostForm";
import EditComponent from "./EditComponent";
import Pagination from './Pagination';


class AllPost extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.state = {
            edit: false,
            formData: {}
        }
    }

    deletePost(id) {
        this.props.deletePost(id);
    }

    editEvent(_id, title, description) {
        this.setState({edit: true})
        this.setState({
            formData: {
                _id: _id,
                title: title,
                description: description
            }
        })
    }

    render() {
        let filteredRecords = [];
        let currentPage = this.props.currentPage;
        let totalPage = this.props.numberOfPages;
        for (let index = 1; index < this.props.posts.length; index++) {
            if (index > currentPage && filteredRecords.length < totalPage) {
                filteredRecords.push(this.props.posts[index]);
            }
        }

        let paginationComponent = <Pagination posts={filteredRecords} currentPage={currentPage}
                                              numberOfPages={totalPage}
                                              // movePreviousPage={this.movePreviousPage}
                                              // moveNextPage={this.moveNextPage}
        />

        let component = (this.state.edit === true) ?
            <EditComponent post={this.state.formData} handleUpdate={this.handleUpdate}/> :
            <PostForm handleSubmit={this.handleSubmit}/>;
        return (
            <div>
                {component}
                {paginationComponent}
            </div>
        );
    }

    componentDidMount() {
        this.props.getPosts();
    }

    handleSubmit(postData) {
        this.props.addPost(postData);
    }

    handleUpdate(postData) {
        this.props.updatePost(postData);
        this.setState({
            edit: false
        })
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        currentPage: state.currentPage,
        numberOfPages: state.numberOfPages
    }
}
export default connect(mapStateToProps, {
    getPosts,
    addPost,
    deletePost,
    updatePost
})(AllPost);
