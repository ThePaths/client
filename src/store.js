

import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { createStore, 
    applyMiddleware} from 'redux';
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

