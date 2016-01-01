import React, { Component, PropTypes } from 'react';
import Well from 'react-bootstrap';

class Post extends Component {
  render() {
    const { postContent } = this.props;
    return (
      <Well>{postContent}</Well>
    );
  }
}

Post.propTypes = {
  postContent: PropTypes.string.isRequired
};

export default Post;
