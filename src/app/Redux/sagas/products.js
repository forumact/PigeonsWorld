import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS } from '../actions';
import { fetchPigeons } from '../../Networks';

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}

function* workerGetProducts() {
  try {   
    //const result = yield call(Axios.post, uri, '', { headers: headerParams });
    const result = yield call(fetchPigeons);
    console.log(result.data);
    yield put({ type: SET_PRODUCTS, value: result.data });
  }
  catch (err) {
    console.log(err);
  }
}
