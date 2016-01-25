import React, { Component, PropTypes } from 'react';
import Post from './Post';

class PostBoard extends Component {
  render() {
console.log(this.props.posts);
    const { posts } = this.props;
    return(
        <div>
          {posts.map(post =>
            <Post post={post} />           
          )}
        </div>
    );
  }
}

export default PostBoard;
