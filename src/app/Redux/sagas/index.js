import { all } from 'redux-saga/effects';
import { watchGetUsers } from './users';
import {watchGetProducts, watchGetUserProducts} from './products';

export default function* () {  
  yield all([
    watchGetUsers(),
    watchGetProducts(),
    watchGetUserProducts(),
  ])
}