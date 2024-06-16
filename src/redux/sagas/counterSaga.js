// src/sagas/postDataSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import {
  postDataSuccess,
  postDataFailure,
  postDineinDataSuccess,
  postDineinDataFailure,
  getDataSuccess,
  getDataFailure,
  saveBasicDetailsSuccess,
  saveBasicDetailsFailure,
  PostDeliveryDataSuccess,
  PostDeliveryDataFailure,
} from "../Actions/PostDataAction";
import {
  POST_DATA_REQUEST,
  POST_ONBOARDING_DATA_FAILURE,
  GET_DATA_REQUEST,
  POST_ONBOARDING_DATA_REQUEST,
  POST_DINEIN_DATA_REQUEST,
  POST_ONBOARDING_DATA_SUCCESS,
  SAVE_BASIC_DETAILS_REQUEST,
  POST_DELIVERY_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_SUCCESS,
  POST_RESTAURANTIMAGE_DATA_FALIURE
} from "../constants";

import { LOCATION_ID } from "../constants";
import {
  PostBasicdetails,
  PostDeliveryDataEndPoint,
  postOutletRegistration,
} from "../Api";
import { GetData } from "../Api";
import { PostOnboardingData } from "../Api";
import { PostDineinData } from "../Api";
import { PostRestaurantImage } from "../Api";






// function* postData(action) {
//   try {
//     const response = yield call(axios.post, 'http://192.168.1.20:8080/outlets/outlet/registration', action.payload);

//     if (response.status === 200) {
//       yield put( postDataSuccess(response.data));
//     } else {
//       yield put(postDataFailure(response.statusText));
//     }
//   } catch (error) {
//     yield put(postDataFailure(error.message));
//   }
// }
function* postData(action) {
  try {
    const response = yield call(postOutletRegistration, action.payload);

    if (response.status === 200) {
      yield put(postDataSuccess(response.data));
    } else {
      yield put(postDataFailure(response.statusText));
    }
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}

function* locationId(action) {
  yield ;
}

// function* getData() {
//   try {
//     const response = yield call(fetch, 'http://192.168.1.20:8080/outlet/8dfe7674-709d-431c-a233-628e839ecc76');
//     const data = yield response.json();
//     yield put(getDataSuccess(data));
//   } catch (error) {
//     yield put(getDataFailure(error.message));
//   }
// }

function* getData() {
  try {
    const response = yield call(GetData);
    const data = yield response.json();
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataFailure(error.message));
  }
}

// function* postOnBoardingData(action) {
//   try {
//     const response = yield call(axios.post, 'http://192.168.1.20:8080/outlets/outlet/onBoarding', action.payload);

//     if (response.status === 200) {
//       yield put( POST_ONBOARDING_DATA_SUCCESS(response.data));
//     } else {
//       yield put(POST_ONBOARDING_DATA_FAILURE(response.statusText));
//     }
//   } catch (error) {
//     yield put(POST_ONBOARDING_DATA_FAILURE(error.message));
//   }
// }
function* postOnBoardingData(action) {
  try {
    const response = yield call(PostOnboardingData, action.payload);

    if (response.status === 200) {
      yield put(POST_ONBOARDING_DATA_SUCCESS(response.data));
    } else {
      yield put(POST_ONBOARDING_DATA_FAILURE(response.statusText));
    }
  } catch (error) {
    yield put(POST_ONBOARDING_DATA_FAILURE(error.message));
  }
}

// function* postDineinData(action) {
//   try {
//     const response = yield call(fetch, 'http://192.168.1.20:8080/outlet/dineIn', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(action.payload),
//     });
//     const data = yield response.json();
//     yield put(postDineinDataSuccess(data));
//   } catch (error) {
//     yield put(postDineinDataFailure(error.message));
//   }
// }

function* postDineinData(action) {
  try {
    const response = yield call(PostDineinData, action.payload);
    const data = yield response.json();
    yield put(postDineinDataSuccess(data));
  } catch (error) {
    yield put(postDineinDataFailure(error.message));
  }
}

function* postBasicDetailsData(action) {
  try {
    const payload = action.payload;
    const response = yield call(PostBasicdetails, payload);
    console.log("payload from saga", payload);
    if (response === 200) {
      yield put(saveBasicDetailsSuccess(response));
    }
  } catch (error) {
    yield put(saveBasicDetailsFailure(error));
  }
}

export function* PostDeliveryDataSagas(action) {
  try {
    const payload = action.payload;
    const response = yield call(PostDeliveryDataEndPoint, payload);
    if (response.status === 200) {
      yield put(PostDeliveryDataSuccess(response.data));
      console.log("Posted Successfully");
    }
  } catch (error) {
    yield put(PostDeliveryDataFailure(error));
  }
}

export function* PostRestaurantImageSaga(action) {
  try {
    const payload = action.payload;
    const response = yield call(PostRestaurantImage, payload);
    if (response.status === 200) {
      yield put(POST_RESTAURANTIMAGE_DATA_SUCCESS(response.data));
      console.log("Posted Successfully");
    }
  } catch (error) {
    yield put(POST_RESTAURANTIMAGE_DATA_FALIURE(error));
  }
}







export function* watchPostDeliveryDataSagas() {
  yield takeEvery(POST_DELIVERY_DATA_REQUEST, PostDeliveryDataSagas);
}

export function* watchBascDetailsPostData() {
  yield takeEvery(SAVE_BASIC_DETAILS_REQUEST, postBasicDetailsData);
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

export function* dineinpostdata() {
  yield takeEvery(POST_DINEIN_DATA_REQUEST, postDineinData);
}

export function* locationIdSaga() {
  yield takeEvery(LOCATION_ID, locationId);
}

export function* RestrauntImageSaga() {
  yield takeEvery(POST_RESTAURANTIMAGE_DATA_REQUEST,  PostRestaurantImageSaga);
}