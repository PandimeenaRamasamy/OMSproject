// src/store/configureStore.js

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// import postDataReducer from '../src/redux/Reducers/postDataReducer';
import rootSaga from "../src/redux/sagas/rootSaga";
import {
  deliveryDataReducer,
  postDataReducer,
  registrationReducer,
  postDataReducergetLocation,
  nameReducer,
  onBoardingForm

} from "./redux/Reducers/postDataReducer";
import { basicDetailsReducer } from "./redux/Reducers/postDataReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  
  postData: postDataReducer,
  basicDetails: basicDetailsReducer,
  deliveryDetails: deliveryDataReducer,
  registration:registrationReducer,
  getlocationdata:postDataReducergetLocation,
  locationiddata:nameReducer,
 OnBoardForm: onBoardingForm

  // Add other reducers here if necessary
});

// Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
