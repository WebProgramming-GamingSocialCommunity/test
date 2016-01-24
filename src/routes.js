import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import PersonalIndex from './components/PersonalIndex';
import Club from './components/Club';
import FriendList from './components/FriendList';
import RoomList from './components/RoomList';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
import Signup from './components/Signup'

export default (
	<Route path="/" component={App}>
        	<IndexRoute component={Welcome} />
                <Route path="/signup" component={Signup} />
         	<Route path="/club">
              		<IndexRoute  component={Club} />
          	</Route>
         	<Route path="/friends" component={FriendList} />
          	<Route path="/match">
              		<IndexRoute component={RoomList} />
         	 </Route>
          	<Route path="/personal" component={PersonalIndex} />
          	<Route path="*" component={NotFound} />
    	</Route>
);
