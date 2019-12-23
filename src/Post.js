import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.description}</p>
            </div>
        );
    }
}

export default connect()(Post);
