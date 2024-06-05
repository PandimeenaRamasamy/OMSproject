import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { deliveryDataReducer } from "./Reducer";
import { RootSagas } from "./RootSagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(
    {
        deliveryDataReducer : deliveryDataReducer
    }
)

const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, middleware)

sagaMiddleware.run(RootSagas)

export default store