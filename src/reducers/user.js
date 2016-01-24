import { combineReducers } from 'redux'
import { SIGN_IN, COMPLETE_SIGN } from '../actions/user'

function signstatus(state = false, action) {
    switch (action.type) {
        case COMPLETE_SIGN:
            return action.status;
        default:
            return state;
    }
}

function registeruser(state = {}, action) {
    switch (action.type) {
        case SIGN_IN:
            console.log(action.info);
            return action.info;
	default:
return state;
    }
}

const app = combineReducers({
    signstatus,
    registeruser
})

export default app;
