import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPosts, addPost} from "./ActionTypes";
import PostForm from "./PostForm";


class AllPost extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <PostForm handleSubmit={this.handleSubmit}></PostForm>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post._id}>
                        {/*{post.editing ? <EditComponent post={post} key={post._id}/> :*/}
                        <Post key={post._id} post={post}/>}
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
export default connect(mapStateToProps, {getPosts, addPost})(AllPost);
