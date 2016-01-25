import { COMPLETE_SIGN, UPDATE_USER/*, ID_UPDATE, COMPLETE_GET */} from '../actionTypes'
import fetch from 'isomorphic-fetch'
import history from '../history'

export function login() {
    return {
        type: COMPLETE_SIGN,
        status: true
    };
}
/*
export function getid(info) {
	return {
		type: ID_UPDATE,
		id:info.id
};
}
*/
export function getUser(info) {
    return {
	type: UPDATE_USER,
	data: info
};
}
/*
export function getin() {
	return {
		type: COMPLETE_GET,
		status: true
}
}
*/
export function receiveUsers(info) {
console.log(JSON.stringify(info));
    return (dispatch) => {
        fetch('http://localhost:8080/v1/users/sign_in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json()
	)
        .then(data => {
            console.log(data);
            dispatch(getUser(data));
            dispatch(login());
		history.replaceState(null,'/personal');
        });
    };
}

