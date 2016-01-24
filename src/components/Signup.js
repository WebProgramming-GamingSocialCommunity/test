const React = require("react");
const fetch = require('isomorphic-fetch')
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            password_confirmation:"",
            error_message:[]
        };   
    }

    handleUsername(event) {
        this.setState({username:event.target.value});
    }

    handleEmail(event) {
        this.setState({email:event.target.value});
    }

     handlePassword(event) {
        this.setState({password:event.target.value});
    }

    handlePasswordC(event) {
        this.setState({password_confirmation:event.target.value});
    }

    getSession(res) {
        fetch()
        
    }

    submit() { 
        var temp = { 
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation 
            }
        }
        fetch('http://localhost:8080/v1/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp)
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
	    console.log(err);
	});
    }

    render() {
        return (
            <div>
                <input type="text" name="username" onChange={ this.handleUsername.bind(this) } />
                <input type="text" name="email" onChange={ this.handleEmail.bind(this) } />
                <input type="text" name="password" onChange={ this.handlePassword.bind(this) } />
                <input type="text" name="password_c" onChange={ this.handlePasswordC.bind(this) } />
                <div className="ui fluid large teal submit button" onClick={ this.submit.bind(this) }>Sign up</div>
            </div>
        );
    }

}
module.exports = Signup;
