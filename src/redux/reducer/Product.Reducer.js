import * as ActionType from '../ActionTypes';

const initValue = {
    isloading: false,
    product: [],
    error: '',
};

export const ProductReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.LOADING_PRODUCT:
            return {
                ...state,
                isloading: true,
                error: ''
            }
        case ActionType.GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                isloading: false,
                error: ''
            }
        case ActionType.INSERT_PRODUCT:
            return {
                ...state,
                product: state.product.concat(action.payload),
                isloading: false,
                error: ''
            }
        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter((p) => p.id !== action.payload),
                isloading: false,
                error: ''
            }
        case ActionType.ERROR_PRODUCT:
            return {
                ...state,
                product: [],
                isloading: false,
                error: action.payload
            }
        default:
            return state;
    }
};