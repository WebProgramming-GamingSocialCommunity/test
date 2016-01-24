const React = require("react");
import { IndexLink, Link } from 'react-router';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
        };   
    }

    handleClick() {
	this.props.login(this.state);
    }     

handleEmail(event) {
        this.setState({email:event.target.value});
    }

    handlePassword(event) {
        this.setState({password:event.target.value});
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <div className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" onChange={this.handleEmail.bind(this)}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" onChange={this.handlePassword.bind(this)}/>
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button" 
				onClick={this.handleClick.bind(this)}
				>Login</div>
                        </div>

                        <div className="ui error message"></div>

                    </div>

                    <div className="ui message">
                        New to us?
                        <Link 
                            to="/signup"
                            activeClassName="active">Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = Welcome;
