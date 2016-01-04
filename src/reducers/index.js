import { combineReducers } from 'redux';
import postsReducer from './posts';

//const rootReducer = combineReducers({
  //postsReducer
//});
const rootReducer = postsReducer;
export default rootReducer;
