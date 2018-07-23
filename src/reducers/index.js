import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import pathsReducer from './paths';
import guestPathsReducer from './guestPaths';
import userPathsReducer from './userPaths';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  paths: pathsReducer,
  guests: guestPathsReducer,
  userPaths: userPathsReducer
});

export default rootReducer;