import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS } from '../actions';
import Axios from 'axios';

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}

function* workerGetProducts() {
  try {
    //const uri = 'https://jsonplaceholder.typicode.com/users';
    const uri = 'http://pegionsworld.local/api/pigeons';
    const headerParams = {
      'Content-Type': `application/json`,
      'X-CSRF-Token': `b2wIWp7bpSjA1DVoTQv8ED4E2X6WMzd6QEUDXvTtE2c`,
    };
    const result = yield call(Axios.post, uri, '', { headers: headerParams });
    console.log(result.data);
    yield put({ type: SET_PRODUCTS, value: result.data });
  }
  catch (err) {
    console.log(err);
  }
}
