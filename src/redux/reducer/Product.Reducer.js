import * as ActionTypes from '../ActionTypes';

const initValue = {
    product: [],
}

export const ProductReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_DATA:
            return {
                ...state,
                product: action.payload
            }          
    
        default:
            return state;
    }
}