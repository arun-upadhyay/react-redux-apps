import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPosts, addPost, deletePost, default as constants} from "./ActionTypes";
import PostForm from "./PostForm";


class AllPost extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(id) {
        this.props.deletePost(id);
    }

    render() {
        return (
            <div>
                <PostForm handleSubmit={this.handleSubmit}></PostForm>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post._id}>
                        {/*{post.editing ? <EditComponent post={post} key={post._id}/> :*/}
                        <Post key={post._id} post={post}/>
                        <button
                            onClick={() => {
                                this.deletePost(post._id)
                            }}>
                            Delete
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
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, {getPosts, addPost, deletePost})(AllPost);
