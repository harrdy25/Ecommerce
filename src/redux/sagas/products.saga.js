import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes';
import { getAllProductRequest, postAllProductRequest } from '../../comman/apis/product.api';
import { setProduct, setProductInsert } from '../action/Product.Action';

function* getProductData(action) {
   try {
      const user = yield call(getAllProductRequest);
      
      yield put(setProduct(user.data));
   } catch (e) {
      console.log(e.message);
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* insertProductData(action) {
   try {
      const Data = yield call(postAllProductRequest, action.payload);
      yield put(setProductInsert(action.payload));
   } catch (e) {
      console.log(e.message);
      
   }
}

export function* productSaga() {
   yield takeEvery(ActionType.GET_PRODUCT, getProductData);
   yield takeEvery(ActionType.INSERT_PRODUCT, insertProductData);
 }