import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';

export const insertProduct = (proData) => (dispatch) => {
  try {
      dispatch(loadingProduct());
      let fData = {
          id: Math.floor(Math.random() * 1000),
          ...proData
      }
    fetch(BASE_URL + 'products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fData),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({type: ActionType.INSERT_PRODUCT, payload: fData})
      })
      .catch(error => {
        dispatch(errorProduct(error))
      });
  } catch (e) {
    dispatch(errorProduct(e))
  }
};

export const loadingProduct = () => (dispatch) => {
    dispatch({type: ActionType.LOADING_PRODUCT})
}

export const errorProduct = (error) => (dispatch) => {
    dispatch({type: ActionType.ERROR_PRODUCT, payload: error})
}

export const fetchProduct = () => (dispatch) => {
    try {
        dispatch(loadingProduct());
        fetch(BASE_URL + "products", {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: ActionType.GET_PRODUCT, payload: data})
        })
        .catch(error => {
            dispatch(errorProduct(error))
        })
    } catch (e) {
        dispatch(errorProduct(e));
    }
};