// src/sagas/postDataSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { POST_DATA_REQUEST, postDataSuccess, postDataFailure,postDineinDataSuccess,postDineinDataFailure,POST_ONBOARDING_DATA_FAILURE } from '../Actions/PostDataAction';
import { GET_DATA_REQUEST, getDataSuccess, getDataFailure ,POST_ONBOARDING_DATA_REQUEST,POST_DINEIN_DATA_REQUEST, POST_ONBOARDING_DATA_SUCCESS} from '../Actions/PostDataAction';
import {LOCATION_ID} from '../Actions/PostDataAction'

import axios from 'axios';


function* postData(action) {
  try {
    const response = yield call(axios.post, 'http://192.168.1.20:8080/outlet/registration', action.payload);

    if (response.status === 200) {
      yield put( postDataSuccess(response.data));
    } else {
      yield put(postDataFailure(response.statusText));
    }
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}














function* locationId(action) {
  // You can perform any side effects here before storing the name
  yield console.log('Storing name:', action.payload);
  // Here you would dispatch an action to update your Redux store with the name
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
    const response = yield call(axios.post, 'http://192.168.1.20:8080/outlet/onBoarding', action.payload);

    if (response.status === 200) {
      yield put( POST_ONBOARDING_DATA_SUCCESS(response.data));
    } else {
      yield put(POST_ONBOARDING_DATA_FAILURE(response.statusText));
    }
  } catch (error) {
    yield put(POST_ONBOARDING_DATA_FAILURE(error.message));
  }
}

function* postDineinData(action) {
  try {
    const response = yield call(fetch, 'http://192.168.1.20:8080/outlet/dineIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(postDineinDataSuccess(data));
  } catch (error) {
    yield put(postDineinDataFailure(error.message));
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


export function* dineinpostdata()
{
  yield takeEvery(POST_DINEIN_DATA_REQUEST, postDineinData);
}

export function* locationIdSaga() {
  yield takeEvery(LOCATION_ID, locationId);
}