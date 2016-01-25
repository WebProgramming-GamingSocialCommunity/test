import React, { Component, PropTypes } from 'react';

class UPost extends Component {
  render() {
    const { post } = this.props;
    return (
<div>
<div className="ui segment">
<h1 className="ui header">{post.user_id}</h1>
          <h2 className="ui header">{ post.title }</h2>
        <p>{ post.content }</p>
      </div>
<div className="ui divider"></div>
</div>
    );
  }
}


export default UPost;
