import * as ActionTypes from '../ActionTypes';

import { BASE_URL } from "../../shared/baseUrl";

export const signupUser = (data) => (dispatch) => {
    try {
        fetch(BASE_URL + 'users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (e) {
        console.log(e)
    }
}

export const clickLogin = (loginData, navigation) => dispatch => {
    let flag = 0, id = 0;

    fetch(BASE_URL + 'users', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(result => {
            result.map(item => {
                if (
                    item.email == loginData.email &&
                    item.password == loginData.password
                ) {
                    flag = 1;
                    id = item.id;
                }
            });
            if (flag === 1) {
                dispatch({ type: ActionTypes.SIGNIN_SUCCESS, payload: id })
                navigation.navigate('Shopping')
            } else {
                dispatch({ type: ActionTypes.SIGNIN_ERROR, payload: "Wrong Email/Password" })
            }
        });

};
