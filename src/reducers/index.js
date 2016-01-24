import { combineReducers } from 'redux';
import { signstatus,  updateUser } from './user'
import { postsReducer , postStatusReducer} from './posts'
import app from './user'

const rootReducer = combineReducers({
  signstatus,
  postsReducer,
  updateUser,
postStatusReducer
});
export default rootReducer;
