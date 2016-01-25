import { combineReducers } from 'redux';
import { signstatus,  updateUser } from './user'
import { postsReducer , postStatusReducer, postsTReducer} from './posts'
import app from './user'

const rootReducer = combineReducers({
  signstatus,
  postsReducer,
  updateUser,
postStatusReducer,
postsTReducer
});
export default rootReducer;
