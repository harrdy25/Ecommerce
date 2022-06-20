import * as ActionTypes from '../ActionTypes';

const initVal = {
    isLoading: false,
    user: null,
    error: '',
    authMsg: ''
}

export const authUserReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.USER_EMAIL:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: action.payload
            }
        case ActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: action.payload,
                authMsg:''
            }
        case ActionTypes.AUTH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: null,
                authMsg:''
            }
        default:
            return state;
    }
}