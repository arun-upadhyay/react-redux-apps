import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as constants from './ActionTypes';

class Post extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.description}</p>
                {/*<button*/}
                {/*    onClick={() => this.props.dispatch({type: constants.EDIT_POST, id: this.props.post.id})}>*/}
                {/*    Edit*/}
                {/*</button>*/}
            </div>
        );
    }
}

export default connect()(Post);
