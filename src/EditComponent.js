import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";

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
                <h1 className="text-muted"> Update Post</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Add Title</Form.Label>
                        <Form.Control type="text" ref={(input) => this.getTitle = input}
                                      defaultValue={this.props.post.title}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Add post</Form.Label>
                        <Form.Control as="textarea" rows="3" ref={(input) => this.getDescription = input}
                                      defaultValue={this.props.post.description}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleEdit}>Update</Button>
                </Form>
            </div>
        );
    }
}

export default connect()(EditComponent);
