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
  getLocationSuccess,
} from "../Actions/PostDataAction";
import {
  POST_DATA_REQUEST,
  POST_ONBOARDING_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_LOCATION_REQUEST,
  POST_ONBOARDING_DATA_REQUEST,
  POST_DINEIN_DATA_REQUEST,
  POST_ONBOARDING_DATA_SUCCESS,
  SAVE_BASIC_DETAILS_REQUEST,
  POST_DELIVERY_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_SUCCESS,
  POST_RESTAURANTIMAGE_DATA_FALIURE,
  POST_PICKUP_DATA_REQUEST,
  POST_KITCHEN_DATA_REQUEST,

  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,

  POST_DINEIN_DATA_SUCCESS,
  POST_DINEIN_DATA_FAILURE

} from "../constants";

import { LOCATION_ID } from "../constants";
import {
  GetLocationData,
  PostBasicdetails,
  PostDeliveryDataEndPoint,
  postOutletRegistration,
} from "../Api";
import { GetData } from "../Api";
import { PostOnboardingData } from "../Api";
import { PostDineinData } from "../Api";
import { PostRestaurantImage } from "../Api";
import { PostPickup } from "../Api";
import { PostKitchen } from "../Api";







function* postData(action) {
  try {
    const response = yield call(postOutletRegistration, action.payload);

    if (response.status === 200) {
      console.log("response fro pm ",response.data)
      yield put(postDataSuccess(response.data));
    } else {
      yield put(postDataFailure(response.statusText));
    }
  } catch (error) {
 }
}

function* locationId(action) {
  
  yield ;
}




function* getData() {
  try {
    const response = yield call(GetData);
    yield put({ type: 'GET_DATA_SUCCESS', payload: response.data });
  }
  catch (error) {
  
    // yield put({ type: 'GET_DATA_FAILURE', payload: error.message });

  }

  
}

function* getLocationData(action) {
  try {
    // const { payload: locationId } = action;
    console.log("In saga",action.payload)
    const response = yield call(GetLocationData,action.payload);
    console.log("Saga Response :",response.data);
    yield put(getLocationSuccess(response.data));
  }
  catch (error) {
  }

  
}


function* postOnBoardingData(action) {
  try {
    const response = yield call(PostOnboardingData, action.payload);

    if (response.status === 200) {
      yield put(POST_ONBOARDING_DATA_SUCCESS(response.data));
    } else {
      yield put(POST_ONBOARDING_DATA_FAILURE(response.statusText));
    }
  } catch (error) {
  }
}



function* postDineinData(action) {
  try {
    console.log("hi from dine in")

    const response = yield call(PostDineinData, action.payload);
    
    yield put(POST_DINEIN_DATA_SUCCESS(response));
  } catch (error) {
 
  }
}

function* postBasicDetailsData(action) {
  try {
    console.log("hi")
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
    console.log("hi from rest")

    const payload = action.payload;
    const response = yield call(PostRestaurantImage, payload);
   
      yield put(POST_RESTAURANTIMAGE_DATA_SUCCESS(response.data));
      console.log("Posted Successfully");
   
  } catch (error) {
  }
}


export function* PostPickupSaga(action) {
  try {
    console.log("hi from pickup")

    const payload = action.payload;
    const response = yield call(PostPickup, payload);
    if (response.status === 200) {
      yield put(POST_RESTAURANTIMAGE_DATA_SUCCESS(response.data));
      console.log("Posted Successfully");
    }
  } catch (error) {
  
  }
}


export function* PostKitchenSaga(action) {
  try {
    const payload = action.payload;
    const response = yield call(PostKitchen, payload);
    if (response.status === 200) {
      yield put(POST_RESTAURANTIMAGE_DATA_SUCCESS(response.data));
      console.log("Posted Successfully");
    }
  } catch (error) {
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

export function* watchgetLocationData() {
  yield takeEvery(GET_DATA_LOCATION_REQUEST, getLocationData);
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

export function* PickupSaga() {
  yield takeEvery(POST_PICKUP_DATA_REQUEST, PostPickupSaga);
}

export function* KitchenSaga() {
  yield takeEvery(POST_KITCHEN_DATA_REQUEST, PostKitchenSaga);
}