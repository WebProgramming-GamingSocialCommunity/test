import { ADD_POST, POST_GET ,PI_COMPLETE,TPOST_GET} from '../actionTypes'


export  function postsReducer(state = [], action) {
  switch(action.type) {
case ADD_POST:
    return [
action.postContent
      ,
      ...state  
    ];
  case POST_GET:
return action.userpost;
default:
return state;

}}

export function postStatusReducer(state = false,action) {
	switch(action.type) {
	case PI_COMPLETE:
return action.status;
default:
return state;
};
}

export function postsTReducer(state=[],action) {
	switch(action.type) {
	case TPOST_GET:
return action.totalpost;
default:
return state;
}
}
