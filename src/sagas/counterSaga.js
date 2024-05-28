// src/sagas/postDataSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { POST_DATA_REQUEST, postDataSuccess, postDataFailure } from '../Actions/PostDataAction';
import { GET_DATA_REQUEST, getDataSuccess, getDataFailure ,POST_ONBOARDING_DATA_REQUEST} from '../Actions/PostDataAction';

function* postData(action) {
  try {
    const response = yield call(fetch, 'http://192.168.1.20:8080/outlet/registration', {
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


function* getData() {
  try {
    const response = yield call(fetch, 'http://192.168.1.20:8080/outlet/8dfe7674-709d-431c-a233-628e839ecc76');
    const data = yield response.json();
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataFailure(error.message));
  }
}

function* postOnBoardingData(action) {
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

export function* watchgetData() {
  yield takeEvery(GET_DATA_REQUEST, getData);
}

export function* onBoardPostData() {
  yield takeEvery(POST_ONBOARDING_DATA_REQUEST, postOnBoardingData);
}

