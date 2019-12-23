import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPosts, addPost, deletePost, updatePost} from "./ActionTypes";
import PostForm from "./PostForm";
import EditComponent from "./EditComponent";


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
        let component = (this.state.edit === true) ?
            <EditComponent post={this.state.formData} handleUpdate={this.handleUpdate}/> :
            <PostForm handleSubmit={this.handleSubmit}/>;
        return (
            <div>
                {component}
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post._id}>
                        <Post key={post._id} post={post}/>
                        <button
                            onClick={() => {
                                this.deletePost(post._id)
                            }}>
                            Delete
                        </button>
                        <button
                            onClick={() => {
                                this.editEvent(post._id, post.title, post.description)
                            }}>
                            Edit
                        </button>
                    </div>
                ))}
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
        posts: state.posts
    }
}
export default connect(mapStateToProps, {getPosts, addPost, deletePost, updatePost})(AllPost);
