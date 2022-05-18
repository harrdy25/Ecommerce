import * as ActionTypes from '../ActionTypes';

const initVal = {
    isLoading: false,
    user: [],
    error: ''
}

export const userReducer = (state=initVal, action) => {
    switch(action.type) {
        case ActionTypes.SIGNUP_USER:
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}