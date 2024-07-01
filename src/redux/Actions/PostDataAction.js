import {
  SAVE_BASIC_DETAILS_REQUEST,
  SAVE_BASIC_DETAILS_SUCCESS,
  SAVE_BASIC_DETAILS_FAILURE,
  LOCATION_ID,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_LOCATION_SUCCESS,
  GET_DATA_LOCATION_FAILURE,
  GET_DATA_LOCATION_REQUEST,
  POST_DINEIN_DATA_REQUEST,
  POST_DINEIN_DATA_SUCCESS,
  POST_DINEIN_DATA_FAILURE,
  POST_ONBOARDING_DATA_REQUEST,
  POST_ONBOARDING_DATA_SUCCESS,
  POST_ONBOARDING_DATA_FAILURE,
 
  POST_DELIVERY_DATA_REQUEST,
  POST_DELIVERY_DATA_SUCCESS,
  POST_DELIVERY_DATA_FAILURE,
  POST_RESTAURANTIMAGE_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_SUCCESS,
  POST_RESTAURANTIMAGE_DATA_FALIURE,
  POST_PICKUP_DATA_REQUEST,
  POST_PICKUP_DATA_SUCCESS,
  POST_PICKUP_DATA_FALIURE,
  POST_KITCHEN_DATA_REQUEST,
  POST_KITCHEN_SUCCESS,
  POST_KITCHEN_FALIURE,
  CLEAR_DATA


} from "../constants";

export const getLocationId = (data) => ({
  type: LOCATION_ID,
  payload: data,
});

export const postDataRequest = (data) => ({
  type: POST_DATA_REQUEST,
  payload: data,
});

export const postDataSuccess = (response) => ({
  type: POST_DATA_SUCCESS,
  payload: response,
});

export const postDataFailure = (error) => ({
  type: POST_DATA_FAILURE,
  payload: error,
});

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
  // payload: data,
});

export const getDataSuccess = (response) => ({
  type: GET_DATA_SUCCESS,
  payload: response,
});

export const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});


export const getLocationRequest = (data) => ({
  type:  GET_DATA_LOCATION_REQUEST,
  payload: data,
});

export const getLocationSuccess = (response) => ({
  type:  GET_DATA_LOCATION_SUCCESS,
  payload: response,
});

export const  getLocationFailure = (error) => ({
  type:  GET_DATA_LOCATION_FAILURE,
  payload: error,
});






export const postDineinDataRequest = (data) => {
  return {
    type: POST_DINEIN_DATA_REQUEST,
    payload: data,
  };
};

export const postDineinDataSuccess = (response) => {
  return {
    type: POST_DINEIN_DATA_SUCCESS,
    payload: response,
  };
};

export const postDineinDataFailure = (error) => {
  return {
    type: POST_DINEIN_DATA_FAILURE,
    payload: error,
  };
};

export const postOnBoardingDataRequest = (data) => {
  return {
    type: POST_ONBOARDING_DATA_REQUEST,
    payload: data,
  };
};


export const postOnBoardingDataSuccess = (response) => {
  return {
    type: POST_ONBOARDING_DATA_SUCCESS,
    payload: response,
  };
};

export const postOnBoardingDataFailure = (error) => {
  return {
    type: POST_ONBOARDING_DATA_FAILURE,
    payload: error,
  };
};

export const saveBasicDetailsRequest = (data) => ({
  type: SAVE_BASIC_DETAILS_REQUEST,
  payload: data,
});

export const saveBasicDetailsSuccess = (data) => ({
  type: SAVE_BASIC_DETAILS_SUCCESS,
  payload: data,
});

export const saveBasicDetailsFailure = (error) => ({
  type: SAVE_BASIC_DETAILS_FAILURE,
  payload: error,
});

export const PostDeliveryDataRequest = (data) => ({
  type: POST_DELIVERY_DATA_REQUEST,
  payload: data,
});

export const PostDeliveryDataSuccess = (response) => ({
  type: POST_DELIVERY_DATA_SUCCESS,
  payload: response,
});

export const PostDeliveryDataFailure = (error) => ({
  type: POST_DELIVERY_DATA_FAILURE,
  payload: error,
});


export const PostRestaurantImageDataRequest=(data)=>({
  type:  POST_RESTAURANTIMAGE_DATA_REQUEST,
  payload:data
})

export const PostRestaurantImageDataSuccess=(response)=>({
  type:  POST_RESTAURANTIMAGE_DATA_SUCCESS,
  payload:response
})

export const PostRestaurantImageDataFailure=(error)=>({
  type:  POST_RESTAURANTIMAGE_DATA_FALIURE,
  payload:error
})


export const PostPickupDataRequest=(data)=>({
  type: POST_PICKUP_DATA_REQUEST,

  payload:data
})

export const PostPickupDataSuccess=(response)=>({
  type: POST_PICKUP_DATA_SUCCESS,
  payload:response
})

export const PostPickupDataFailure=(error)=>({
  type:  POST_PICKUP_DATA_FALIURE,
  payload:error
})


export const PostKitchenDataRequest=(data)=>({
  type:  POST_KITCHEN_DATA_REQUEST,

  payload:data
})

export const PostKitchenDataSuccess=(response)=>({
  type:   POST_KITCHEN_SUCCESS,

  payload:response
})

export const PostKitchenDataFailure=(error)=>({
  type:  POST_KITCHEN_FALIURE,

  payload:error
})

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name
})


export const clearData = () => ({
  type: CLEAR_DATA,
});
