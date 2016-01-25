import React, { Component, PropTypes } from 'react';
import { Well, Modal, Col } from 'react-bootstrap';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
<div>
<div className="ui segment">
          <h2 className="ui header">{ post.title }</h2>
        <p>{ post.content }</p>
      </div>
<div className="ui divider"></div>
</div>
    );
  }
}


export default Post;
