import React, { Component, PropTypes } from 'react';
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;

class PostInput extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      postContent: this.props.postContent || ""
    };
  }
  
  handleSubmit(event){
    console.log('postContent', this.state.postContent); 
    const postContent = this.state.postContent;
    this.props.onSave(postContent);
    this.setState({
      postContent: ""
    });
  }
  
  handleChange(event){
    this.setState({
      postContent: event.target.value  
    });
  }

  render(){
    return(
      <div>
        <Input className = "new-post"
          type='textarea'
          ref='postInput'
          label='Update Status' 
          placeholder= {this.props.placeholder}
          value= {this.state.postContent}
          onChange={this.handleChange.bind(this)}
        />
        <Button onClick={this.handleSubmit.bind(this)}>post</Button>
      </div>
    );
  }
}

PostInput.PropTypes = {
  onSave: PropTypes.func.isRequired,
  postContent: PropTypes.string,
  placeholder: PropTypes.string
};

module.exports = PostInput;
