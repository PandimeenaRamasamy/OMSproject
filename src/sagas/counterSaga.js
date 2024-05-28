// src/sagas/postDataSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { POST_DATA_REQUEST, postDataSuccess, postDataFailure } from '../Actions/PostDataAction';
function* postData(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(postDataSuccess(data));
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}
export function* watchPostData() {
  yield takeEvery(POST_DATA_REQUEST, postData);
}
