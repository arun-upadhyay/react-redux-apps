import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as constants from './ActionTypes';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.message}</p>
                <button
                    onClick={() => this.props.dispatch({type: constants.EDIT_POST, id: this.props.post.id})}>
                    Edit
                </button>
                <button
                    onClick={() => this.props.dispatch({type: constants.DELETE_POST, id: this.props.post.id})}>
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(Post);
