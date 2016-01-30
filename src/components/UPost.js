import React, { Component, PropTypes } from 'react';

class UPost extends Component {
    render() {
        const { post } = this.props;
        return (
            <div>
                <div className="ui fluid top attached header">
                    <span className="ui large header">{post.user_id+'         :         '}</span>
                    <span className="ui medium header">{ post.title }</span>
                </div>
                <div className="ui fluid attached segment">
                    <p>{post.content}</p>
                </div>
                <div className="ui divider"></div>
            </div>
        );
    }
}


export default UPost;
