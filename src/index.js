import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootReducer from './appReducers';
// import usersSaga from "../redux-saga/sagas";
import thunk from 'redux-thunk';
import rootSaga from './saga';


import './index.css';
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
    
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
