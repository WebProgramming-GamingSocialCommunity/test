import React, { Component, PropTypes } from 'react';
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;

class PostInput extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            postContent: "",
            title: ""
        };
    }

    handleSubmit(event){
        let postemp = {
            content:this.state.postContent,
            title:this.state.title
        }
        this.props.onSave(postemp,this.props.user_id);
        this.setState({
            postContent: "",
            title:""
        });
    }

    handlecChange(event){
        this.setState({
            postContent: event.target.value  
        });
    }

    handletChange(event) {
        this.setState({
            title:event.target.value
        });
    }

    render(){
        return(
            <div className="ui text container">
                <div className="ui form">
                    <Input 
                        type='textarea'
                        placeholder= {this.props.placeholder}
                        value= {this.state.postContent}
                        onChange={this.handlecChange.bind(this)}
                    />
                </div>
                <span className="ui input">
                    <Input 
                        type='text'
                        placeholder={this.props.pht}
                        value={this.state.title}
                        onChange={this.handletChange.bind(this)}
                    />
                </span>
                <span className="sub">
                    <Button className="ui right floated button" onClick={this.handleSubmit.bind(this)}>post</Button></span>
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
