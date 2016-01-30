import React, { Component, PropTypes } from 'react';
import UPostBoard from './UPostBoard';

class PostIndex extends React.Component{
    componentDidMount() {this.props.actions.getTotalPost();}
    render(){
        return(
            <UPostBoard posts={this.props.posts}/>
        );
    }
}

module.exports = PostIndex;

