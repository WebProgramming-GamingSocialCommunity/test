import React, { Component, PropTypes } from 'react';
import Post from './Post';

class PostBoard extends Component {
  render() {
console.log(this.props.posts);
    const { posts } = this.props;
    if(posts.length!==0) {return(
      <section className = 'post-board'>
        <ul className = 'post-list'>
          {posts.map(post =>
            <Post post={post} />           
          )}
        </ul>
      </section>
    );}
    else {
	return(<section className='post-board'></section>);
}
  }
}

export default PostBoard;
