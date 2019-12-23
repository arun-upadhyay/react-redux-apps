import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.getTitle.value,
            description: this.getMessage.value
        }
        this.props.handleSubmit(data);
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           placeholder="Enter Post Title"/>
                    <br/><br/>
                    <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                              placeholder="Enter Post"/>
                    <br/><br/>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);
