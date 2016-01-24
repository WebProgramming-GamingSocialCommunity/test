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
    <div className="ui one column stackable center aligned vertically padded grid container">
        <div className="column twelve wide">
            <h2 className="ui center aligned icon header">
                <i className="circular users icon"></i>
                <div className="content">
                    Sign up
                    <div className="sub header">Come join us!</div>
                </div>
            </h2>
            <div className="ui large form">
                <div className="ui attached segment">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="username" placeholder="Username" onChange={ this.handleUsername.bind(this) } />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="mail icon"></i>
                                <input type="text" name="email" placeholder="Email" onChange={ this.handleEmail.bind(this) } />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="text" name="password" placeholder="Password" onChange={ this.handlePassword.bind(this) } />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="text" name="password_c" placeholder="Password Confirmation" onChange={ this.handlePasswordC.bind(this) } />
                            </div>
                        </div>
                    </div>
                    <div className="ui fluid large teal bottom attached submit button" onClick={ this.submit.bind(this) }>Sign up</div>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }

}
module.exports = Signup;
