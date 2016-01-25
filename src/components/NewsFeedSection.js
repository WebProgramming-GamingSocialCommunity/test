import React, { Component, PropTypes } from 'react';
import PostBoard from './PostBoard';
import PostInput from './PostInput';

class NewsFeedSection extends Component {
  handleSave(postContent,id){
console.log(id);
    if(postContent.content.length !== 0){
      this.props.addPost(postContent,id);
    }
  }

  render(){
    return(
      <div>
        <PostInput
          onSave={this.handleSave.bind(this)}
          placeholder="What do you want to post?"
	pht="Give it a title"
	user_id={this.props.user_id}
        />
<div className="ui divider"></div>
        <PostBoard posts={this.props.posts}/>
     </div>
    );
  }
}

NewsFeedSection.PropTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    postContent: PropTypes.string.isRequired
  })).isRequired,
  addPost: PropTypes.func.isRequired
};

export default NewsFeedSection;
