import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import {API_URL} from "./Constants/ApiConstants";

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id}/> :
                            <Post key={post.id} post={post}/>}
                    </div>
                ))}
            </div>
        );
    }

    componentDidMount() {
        const endpoint = API_URL + "posts";
        let postData = null;
        fetch(endpoint)
            .then(res => res.json())
            .then(json => {
                this.props.posts = json;
            }).catch(err => {
            console.log(`${err.message} has occurred`)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
