import React, { Component, PropTypes } from 'react';
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;

class PostInput extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      inputPost: this.props.inputPost || ""
    };
  }
  
  handleSubmit(event){
    const inputPost = event.target.value.trim();
    this.props.onSave(inputPost);
    this.setState({
      inputPost: ""
    });
  }
  
  handleChange(event){
    this.setState({
      inputPost: event.target.value  
    });
  }

  render(){
    return(
      <div>
        <Input className = "new-post"
          type='textarea' 
          label='Update Status' 
          placeholder= {this.props.placeholder}
          value= {this.state.inputPost}
          onChange={this.handleChange.bind(this)}
        />
        <Button onClick={this.handleSubmit.bind(this)}>post</Button>
      </div>
    );
  }
}

PostInput.PropTypes = {
  onSave: PropTypes.func.isRequired,
  inputPost: PropTypes.string,
  placeholder: PropTypes.string
};

module.exports = PostInput;
