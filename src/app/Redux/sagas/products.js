import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS } from '../actions';
import Axios from 'axios';

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}

function* workerGetProducts() {
  try {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_PRODUCTS, value: result.data });
  }
  catch {
    console.log('Failed');
  }
} 