import * as ActionTypes from '../ActionTypes';

const initValue = {
    count: 0
}

export const counterReducer = (state=initValue, action) => {
    console.log(state, action);
    switch(action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            console.log("A", state.count);
            return {
                ...state,
                count: state.count + 1,     
            }
        case ActionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1,    
            }
        default:
            return state
    }
}