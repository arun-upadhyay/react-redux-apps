import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrevious() {

    }

    handleNext() {

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
                <button onClick={() => this.handlePrevious}>Previous</button>
                <button onClick={() => this.handleNext()}>Next</button>

            </div>);
    }
}

export default connect()(Pagination);
