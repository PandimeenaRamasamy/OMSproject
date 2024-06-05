import { all, takeEvery } from "redux-saga/effects";
import { PostDeliveryDataSagas } from "./Sagas";
import { POST_DELIVERY_DATA_REQUEST } from "./Constants";

export function* RootSagas(){
    yield all([
        takeEvery(POST_DELIVERY_DATA_REQUEST, PostDeliveryDataSagas)
    ])
}