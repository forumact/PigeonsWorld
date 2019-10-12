import { all } from 'redux-saga/effects';
import { watchGetUsers } from './users';
import {watchGetProducts} from './products';

export default function* () {  
  yield all([
    watchGetUsers(),
    watchGetProducts()
  ])
}