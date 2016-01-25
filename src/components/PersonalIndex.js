import React, { Component, PropTypes } from 'react';
import NewsFeedSection from '../components/NewsFeedSection';

class PersonalIndex extends React.Component{
  render(){
console.log(this.props.user_id);
if(this.props.userpoststatus===false) this.props.actions.getInitPost(this.props.user_id);
    return(
        <NewsFeedSection posts={this.props.userposts} addPost={this.props.actions.addPostToServer} user_id={this.props.user_id} />
    );
  }
}

module.exports = PersonalIndex;

