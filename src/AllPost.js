import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPosts, addPost, deletePost, updatePost, handleNextPage, handlePreviousPage} from "./ActionTypes";
import PostForm from "./PostForm";
import EditComponent from "./EditComponent";
import {Button, ButtonToolbar} from 'react-bootstrap';


class AllPost extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
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

    handlePrevious(totalPage, currentPage) {
        this.props.handlePreviousPage(totalPage, currentPage);
    }

    handleNext(totalPage, currentPage) {
        this.props.handleNextPage(totalPage, currentPage);
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

        let component = (this.state.edit === true) ?
            <EditComponent post={this.state.formData} handleUpdate={this.handleUpdate}/> :
            <PostForm handleSubmit={this.handleSubmit}/>;
        return (
            <div>
                <div className="jumbotron text-left">
                    <h1>Simple CRUD Operation using React-JS, Redux and Express API</h1>
                </div>
                {component}
                {filteredRecords.map((post) => (
                    <div key={post._id}>
                        <Post key={post._id} post={post}/>
                        <ButtonToolbar>
                            <Button variant="link"
                                    onClick={() => {
                                        this.deletePost(post._id)
                                    }}>
                                Delete
                            </Button>
                            <Button variant="link"
                                    onClick={() => {
                                        this.editEvent(post._id, post.title, post.description)
                                    }}>
                                Edit
                            </Button>
                        </ButtonToolbar>

                    </div>
                ))}
                <br/><br/>
                <div>
                    <ButtonToolbar>
                        <Button variant="secondary  mr-3" href="#"
                                onClick={() => this.handlePrevious(totalPage, currentPage)}>Previous</Button>
                        <Button variant="secondary" href="#"
                                onClick={() => this.handleNext(totalPage, currentPage)}>Next</Button>
                    </ButtonToolbar>

                </div>
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
export default connect(mapStateToProps,
    {getPosts, addPost, deletePost, updatePost, handleNextPage, handlePreviousPage})(AllPost);
