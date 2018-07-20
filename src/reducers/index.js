import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import pathsReducer from './paths';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  paths: pathsReducer
});

export default rootReducer;