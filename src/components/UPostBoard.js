import React, { Component, PropTypes } from 'react';
import UPost from './UPost.js';

class UPostBoard extends Component {
    render() {
        const { posts } = this.props;
        return(
            <div>
                {posts.map(post =>
                           <UPost post={post} />           
                          )}
                      </div>
        );
    }
}

export default UPostBoard;
