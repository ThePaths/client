import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import pathsReducer from './paths';
import guestPathsReducer from './guestPaths';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  paths: pathsReducer,
  guests: guestPathsReducer
});

export default rootReducer;