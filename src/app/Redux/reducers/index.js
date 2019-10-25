import users from './users';
import products from './products';
import userProducts from './userProducts';
import blogs from './Blogs';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import userFavourites from './userFavourites';

const rootReducer = combineReducers({
  users: users,
  products: products,
  userProducts: userProducts,
  userFavourites: userFavourites,
  blogs: blogs,
  form: formReducer,
});

export default rootReducer;