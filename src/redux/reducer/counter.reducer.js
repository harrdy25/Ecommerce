import * as ActionTypes from '../ActionTypes';

const initialVal = {
    count: 0
}

export default counterReducer = (state=initialVal, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return{
                count: state.count + 1,
                ...state
            }
        case ActionTypes.DECREMENT_COUNTER:
            return{
                count: state.count - 1,
                ...state
            }
        default:
            return state
    }
}