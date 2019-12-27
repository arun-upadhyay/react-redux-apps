import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {addPost, deletePost, getPosts, moveNextPage, movePreviousPage, updatePost} from "./ActionTypes";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrevious() {
        let previousCurrentPage = this.props.currentPage - this.props.numberOfPages;
        if (previousCurrentPage < 0) {
            previousCurrentPage = 0;
        }
      //  this.props.movePreviousPage(previousCurrentPage);
    }

    handleNext() {
        let nextCurrentPage = this.props.currentPage + this.props.numberOfPages;
      //  this.props.moveNextPage(nextCurrentPage);
    }

    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {
                    this.props.posts.map(post => {
                        return <div key={post._id}>
                            <Post key={post._id} post={post}/>
                        </div>
                    })
                }
                <button onClick={() => this.handlePrevious()}>Previous</button>
                <button onClick={() => this.handleNext()}>Next</button>

            </div>);
    }
}

export default connect()(Pagination);
