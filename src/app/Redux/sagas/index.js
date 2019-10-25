import { all } from 'redux-saga/effects';
import { watchGetUsers } from './users';
import { watchGetProducts } from './products';
import { watchGetUserProducts } from './userProducts';
import { watchGetBlogs } from './blogs';
import { watchGetUserFavourites } from './userFavourites';


export default function* () {
  yield all([
    watchGetUsers(),
    watchGetProducts(),
    watchGetUserProducts(),
    watchGetUserFavourites(),
    watchGetBlogs(),
  ])
}