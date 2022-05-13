import * as ActionTypes from '../ActionTypes';

export const incrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREMENT_COUNTER, payload: 0})
}

export const decrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_COUNTER, payload: 0})
}