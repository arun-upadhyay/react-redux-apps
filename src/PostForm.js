import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';


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
                <h1 className="text-muted"> Add Post</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Add Title</Form.Label>
                        <Form.Control type="text" ref={(input) => this.getTitle = input} placeholder="Post title"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Add post</Form.Label>
                        <Form.Control as="textarea" rows="3" ref={(input) => this.getMessage = input}
                                      placeholder="Write your post"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Post</Button>
                </Form>
            </div>
        );
    }
}

export default connect()(PostForm);
