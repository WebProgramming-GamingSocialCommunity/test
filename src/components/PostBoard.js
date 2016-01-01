import React, { Component, PropTypes } from 'react';
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
//const createStore = require('redux').createStore;

class PostBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      post: "",
      inputPost: ""
    };
  }
  
  handleSubmit(){
    this.setState({
      post: this.refs.postInput.getValue(),
      inputPost: ""
    });
  }
  
  handleChange(event){
    this.setState({
      inputPost: event.target.value  
    });
  }

  render(){
    const { inputPost, postList, handleChange, handleSubmit } = this.props;
    return(
      <div>
        <Input 
          ref='postInput' 
          type='textarea' 
          label='Update Status' 
          placeholder='What do you want to post ?'
          value= {inputPost}
          onChange={() => handleChange()}
        />
        <Button onClick={() => handleSubmit()}>post</Button>
      </div>
    );
  }
}

//PostBoard.propTypes = {
  //inputPost: PropTypes.string.isRequired,
  //postList: PropTypes.array.isRequired,
  //handleChange: PropTypes.func.isRequired,
  //handleSubmit: PropTypes.func.isRequired
//};
module.exports = PostBoard;
