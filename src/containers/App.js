import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user'
    
class App extends Component {

    componentDidMount() {
        $(".ui.dropdown").dropdown("refresh");
    }

    render() {
	const { status, actions } = this.props;
console.log(actions);
        if(status===false) {
            return React.cloneElement(this.props.children, {login: actions.receiveUsers});
        } 
        return (
            <div>
                <div className="ui inverted top fixed menu topbar">
                    <div className="ui dropdown icon item">
                        <i className="sidebar icon"></i>
                        <div className="vertical menu below">
                            <Link 
                                to="/personal" 
                                activeClassName="active"
                                className="item"
                                >Personal Index
                            </Link>
                            <Link
                                to="/match"
                                activeClassName="active"
                                className="item"
                                >Match
                            </Link>
                            <Link
                                to="/friends"
                                activeClassName="active"
                                className="item"
                                >Friend List
                            </Link>
                            <Link
                                to="/club"
                                activeClassName="active"
                                className="item"
                                >Club
                            </Link>
			
                        </div>
                    </div>
                    <div className="header item"><span className="brandtext">Game Community</span></div>
                </div>
                <div className="ui text container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      user: state.registeruser,
      status: state.signstatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
