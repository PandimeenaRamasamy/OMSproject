// src/sagas/rootSaga.js

import { all } from 'redux-saga/effects';
import { watchPostData } from '../sagas/counterSaga';

export default function* rootSaga() {
  yield all([
    watchPostData(),
  ]);
}
