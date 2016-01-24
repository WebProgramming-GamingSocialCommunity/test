export const SIGN_IN = 'SIGN_IN';
export const COMPLETE_SIGN = 'COMPLETE_SIGN'
import fetch from 'isomorphic-fetch'

export function signin(info) {
    return {
        type: SIGN_IN,
        info
    };
}

export function login() {
    return {
        type: COMPLETE_SIGN,
        status: true
    }
}

export function receiveUsers(info) {
    return (dispatch) => {
        fetch('http://localhost:8080/v1/users/sign_in', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {if(data.status!=422){
            dispatch(signin(data));
            dispatch(login());}
        });
    };
}
