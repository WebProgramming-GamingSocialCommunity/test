import React, { Component, PropTypes } from 'react';
import PostBoard from './PostBoard';
import PostInput from './PostInput';

class NewsFeedSection extends Component {
  handleSave(inputPost){
    if(inputPost !== 0){
      this.props.addPost(inputPost);
    }
  }

  render(){
    return(
      <section className = "news-feed-section">
        <PostInput
          onSave={this.handleSave.bind(this)}
          placeholder="What do you want to post?"
        />
        <PostBoard posts={this.props.posts}/>
      </section>
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
