import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user'
import * as PostActions from '../actions/posts'

class App extends Component {
    handleRefresh() {
        const { actionsP }=this.props;
        actionsP.getTotalPost();
    };

    render() {
        const { user, status, actionsU, userpost, actionsP, userpoststatus, post} = this.props;
        if(status===false) {
            return (<div className="ui text container">
                {React.cloneElement(this.props.children, {login: actionsU.receiveUsers})}
            </div>
                   );
        } 
        return (
            <div>
                <div className="ui inverted top fixed menu topbar">
                    <Link 
                        to="/posts" 
                        activeClassName="active"
                        onClick={this.handleRefresh.bind(this)}
                        className="header item"
                        ><span className="brandtext">Community</span>
                    </Link>
                    <Link 
                        to="/personal" 
                        activeClassName="active"
                        className="item"
                        >Personal Index
                    </Link>

                    <div className="item">Match</div>
                </div>
                <div className="ui text container">
                    {React.cloneElement(this.props.children, {actions :actionsP, userposts: userpost, user_id: user.id, userpoststatus: userpoststatus, posts:post})}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.updateUser,
        status: state.signstatus,
        userpost: state.postsReducer,
        userpoststatus: state.postStatusReducer,
        post: state.postsTReducer
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
