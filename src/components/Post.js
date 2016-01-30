import React, { Component, PropTypes } from 'react';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div>
                <h2 className="ui fluid top attached header">
                    {post.title}
                </h2>
                <div className="ui fluid attached segment">
                    <p>{post.content}</p>
                </div>
                <div className="ui divider"></div>
            </div>
        );
    }
}


export default Post;
