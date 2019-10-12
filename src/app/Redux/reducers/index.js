import users from './users';
import products from './products';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users: users,
  products: products,
  form: formReducer,
});

export default rootReducer;