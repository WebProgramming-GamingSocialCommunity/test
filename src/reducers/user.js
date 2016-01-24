import { combineReducers } from 'redux'
import { COMPLETE_SIGN ,UPDATE_USER/*,ID_UPDATE/*, COMPLETE_GET*/ } from '../actionTypes'

export function signstatus(state = false, action) {
    switch (action.type) {
        case COMPLETE_SIGN:
            return action.status;
        default:
            return state;
    }
}

export function updateUser(state= {}, action) {
	switch (action.type) {
		case UPDATE_USER:
			return action.data;
default:
return state;			
	}
}

/*export function updateId( state=-1 ,action) {
	switch (action.type) {
	case ID_UPDATE:
return action.id;
default:
return state;
}
}*/
/*
export function getstatus(state=false, action) {
	switch (action.type) {
	case COMPLETE_GET:
return action.status;
default:
return state;
}
}*/

