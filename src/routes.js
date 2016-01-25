import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import PersonalIndex from './components/PersonalIndex';
import Welcome from './components/Welcome';
import Signup from './components/Signup'
import PostIndex from './components/PostIndex'

export default (
	<Route path="/" component={App}>
        	<IndexRoute component={Welcome} />
                <Route path="/signup" component={Signup} />
          	<Route path="/personal" component={PersonalIndex} />
 		<Route path="/posts" component={PostIndex} />
    	</Route>
);
