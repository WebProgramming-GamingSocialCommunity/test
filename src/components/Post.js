import React, { Component, PropTypes } from 'react';
import { Well, Modal, Col } from 'react-bootstrap';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <Well>
        <Modal.Header>
          <Col lg={2}>{ post.usr }</Col>
          <Modal.Title>{ post.title }</Modal.Title>
        </Modal.Header>
        { post.postContent }
      </Well>
    );
  }
}


export default Post;
