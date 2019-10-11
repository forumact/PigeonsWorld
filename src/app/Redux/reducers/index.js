import users from './users';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users: users,
  form: formReducer,
});

export default rootReducer;