import React, { Component, PropTypes } from 'react';
import NewsFeedSection from '../components/NewsFeedSection';

class PersonalIndex extends React.Component{
  render(){
console.log(this.props.user_id);
    return(
        <NewsFeedSection posts={this.props.posts} addPost={this.props.addPost} user_id={this.props.user_id} />
    );
  }
}

module.exports = PersonalIndex;

