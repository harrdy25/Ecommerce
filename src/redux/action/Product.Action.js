import { BASE_URL } from "../../shared/baseUrl";
import * as ActionType from '../ActionTypes';

export const insertProduct = (proData) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    let fData = {
      id: Math.floor(Math.random() * 1000),
      ...proData
    }
    fetch(BASE_URL + 'product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fData),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.INSERT_PRODUCT, payload: fData })
      })
      .catch(error => {
        dispatch(errorProduct(error))
      });
  } catch (e) {
    dispatch(errorProduct(e))
  }
};

export const loadingProduct = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_PRODUCT })
}

export const errorProduct = (error) => (dispatch) => {
  dispatch({ type: ActionType.ERROR_PRODUCT, payload: error })
}

export const fetchProduct = () => (dispatch) => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + "product", {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("blabalasdbasjbdawn");
        }
      })
      .then(data => {
        dispatch({ type: ActionType.GET_PRODUCT, payload: data })
      })
      .catch(error => {
        dispatch(errorProduct(error.message))
      })
  } catch (e) {
    dispatch(errorProduct(e));
  }
};
export const deleteProduct = (id) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + "product/" + id, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("blabalasdbasjbdawn");
        }
      })
      .then(data => {
        dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
      })
      .catch(error => {
        dispatch(errorProduct(error.message))
      })
  } catch (e) {
    dispatch(errorProduct(e));
  }
}