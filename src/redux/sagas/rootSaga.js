// src/sagas/rootSaga.js

import { all } from "redux-saga/effects";
import {
  watchBascDetailsPostData,
  watchPostData,
  watchPostDeliveryDataSagas,
  RestrauntImageSaga
} from "../sagas/counterSaga";
import { watchgetData } from "../sagas/counterSaga";
import { onBoardPostData } from "../sagas/counterSaga";
import { dineinpostdata } from "../sagas/counterSaga";
import { locationIdSaga } from "../sagas/counterSaga";
import { PickupSaga } from "../sagas/counterSaga";
import { KitchenSaga } from "../sagas/counterSaga";
export default function* rootSaga() {
  yield all([
    watchPostData(),
    watchgetData(),
    onBoardPostData(),
    dineinpostdata(),
    locationIdSaga(),
    watchBascDetailsPostData(),
    watchPostDeliveryDataSagas(),
    RestrauntImageSaga() ,
    PickupSaga(),
    KitchenSaga()
  ]);
}
