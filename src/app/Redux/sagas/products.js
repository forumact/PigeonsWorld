import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS, GET_USER_PRODUCTS, SET_USER_PRODUCTS } from '../actions';
import { fetchPigeons, fetchUserPigeons } from '../../Networks';

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}

function* workerGetProducts() {
  try {
    //const result = yield call(Axios.post, uri, '', { headers: headerParams });
    const result = yield call(fetchPigeons);
    yield put({ type: SET_PRODUCTS, value: result.data });
  }
  catch (err) {
    console.log(err);
  }
}

export const watchGetUserProducts = function* () {  
  yield takeEvery(GET_USER_PRODUCTS, workerGetUserProducts);
}


function* workerGetUserProducts() {
  try {  
    const result = yield call(fetchUserPigeons);
    yield put({ type: SET_USER_PRODUCTS, value: result.data });
  }
  catch (err) {
    console.log(err);
  }
}