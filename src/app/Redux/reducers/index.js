import users from './users';
import products from './products';
import userProducts from './userProducts';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users: users,
  products: products,
  userProducts:userProducts,
  form: formReducer,
});

export default rootReducer;