import * as ActionTypes from '../ActionTypes';

const initVal = {
    isLoading: false,
    user: null,
    error: ''
}

export const userReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_USER:
            return {
                ...state,
                user: action.payload
            }
        case ActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error : ''
            }
        case ActionTypes.SIGNIN_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}