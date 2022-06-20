import * as ActionTypes from '../ActionTypes';
import auth from '@react-native-firebase/auth';

import { BASE_URL } from "../../shared/baseUrl";
import AsyncStorage from '@react-native-community/async-storage';

export const authSignupUser = (data) => (dispatch) => {
    auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => {
            auth()
            .onAuthStateChanged((user) => {
                user.sendEmailVerification()
                    .then(() => {
                        dispatch({ type: ActionTypes.USER_EMAIL, payload: "Please verify email id," })
                    })
                    .catch((error) => {
                        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error.code })
                    })
            })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                dispatch({ type: ActionTypes.AUTH_ERROR, payload: "That email address is already in use!" })
            }

            if (error.code === 'auth/invalid-email') {
                dispatch({ type: ActionTypes.AUTH_ERROR, payload: "That email address is already in use!" })
            }

        });
}

export const authClickLogin = (loginData) => async (dispatch) => {
    auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then((user) => {
            if (user.emailVerified) {
                dispatch({ type: ActionTypes.SIGNIN_SUCCESS, payload: user })
            } else {
                console.log("sasa", user.user.uid);
                AsyncStorage.setItem("user", user.user.uid);
                dispatch({ type: ActionTypes.USER_EMAIL, payload: "Please Verify your email id!" })
            }
        })
        .catch((error) => {
            dispatch({ type: ActionTypes.AUTH_ERROR, payload: error.code })
        })
};
