import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit = (e) => {
        e.preventDefault();
        const data = {
            _id: this.props.post._id,
            title: this.getTitle.value,
            description: this.getDescription.value
        };
        this.props.handleUpdate(data);

    }

    render() {
        return (
            <div>
                <form>
                    <h2> Update Post</h2>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.title}/> <br/><br/>

                    <textarea required rows="5" ref={(input) => this.getDescription = input}
                              defaultValue={this.props.post.description}/>
                    <br/>

                    <button onClick={this.handleEdit}>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);
