import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import initDataReducer from '../reducers/initDataReducer';
import savingReducer from '../reducers/savingReducer';


const reducersCombined = combineReducers({initDataReducer,savingReducer});

const store = createStore(
  reducersCombined,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
