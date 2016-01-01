import React, { Component, PropTypes } from 'react';
import Well from 'react-bootstrap';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <Well>{post.postContent}</Well>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
  postContent: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
