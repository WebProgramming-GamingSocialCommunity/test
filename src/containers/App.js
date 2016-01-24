import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user'
import * as PostActions from '../actions/posts'
    
class App extends Component {

    render() {
console.log(this.props);
	const { user, status, actionsU, post, actionsP, poststatus} = this.props;
        if(status===false) {
            return (<div className="ui text container">
{React.cloneElement(this.props.children, {login: actionsU.receiveUsers})}
</div>
);
        } 
	console.log(user.id);
	if(poststatus===false) actionsP.getInitPost(user.id);
        return (
            <div>
                <div className="ui inverted top fixed menu topbar">
                    <div className="header item"><span className="brandtext">Community</span></div>
                      <Link 
                                to="/personal" 
                                activeClassName="active"
                                className="item"
                                >Personal Index
                            </Link>

			<div className="item">Match</div>
                </div>
                <div className="ui text container">
                    {React.cloneElement(this.props.children, {addPost: actionsP.addPostToServer, posts: post, user_id: user.id})}
                </div>
            </div>
        );
    }
}

App.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    usr: PropTypes.string,
    title: PropTypes.string,
    postContent: PropTypes.string.isRequired
  })).isRequired
};

function mapStateToProps(state) {
  return {
      user: state.updateUser,
      status: state.signstatus,
      post: state.postsReducer,
	poststatus: state.postStatusReducer
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actionsU: bindActionCreators(UserActions, dispatch),
    actionsP: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
