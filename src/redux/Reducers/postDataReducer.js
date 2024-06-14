// src/reducers/postDataReducer.js

import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  POST_ONBOARDING_DATA_REQUEST,
  POST_ONBOARDING_DATA_SUCCESS,
  POST_ONBOARDING_DATA_FAILURE,
  POST_DINEIN_DATA_FAILURE,
  POST_DINEIN_DATA_SUCCESS,
  POST_DINEIN_DATA_REQUEST,
  SAVE_BASIC_DETAILS_REQUEST,
  SAVE_BASIC_DETAILS_SUCCESS,
  SAVE_BASIC_DETAILS_FAILURE,
  POST_DELIVERY_DATA_REQUEST,
  POST_DELIVERY_DATA_SUCCESS,
  POST_DELIVERY_DATA_FAILURE,
  POST_RESTAURANTIMAGE_DATA_REQUEST,
  POST_RESTAURANTIMAGE_DATA_SUCCESS,
  POST_RESTAURANTIMAGE_DATA_FALIURE


} from "../constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const postDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case POST_ONBOARDING_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_ONBOARDING_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_ONBOARDING_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case POST_DINEIN_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_DINEIN_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_DINEIN_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };


      case POST_RESTAURANTIMAGE_DATA_REQUEST:
        return { ...state, loading: true, error: null };

      case   POST_RESTAURANTIMAGE_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

      case POST_RESTAURANTIMAGE_DATA_FALIURE:
        return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// export default postDataReducer;

const basicDetailsInitialState = {
  RestaurantSessions: [
    {
      name: "",
      defaultTime: [
        {
          startTime: "",
          endTime: "",
          weekday: [],
        },
      ],
    },
  ],
  cuisines: [],
  amenities: [],
  parking: [],
  safetyMeasures: "",
  alcohol: "",
  loading: false,
  error: null,
};

export const basicDetailsReducer = (
  state = basicDetailsInitialState,
  action
) => {
  switch (action.type) {
    case SAVE_BASIC_DETAILS_REQUEST:
      return {
        ...state,
        Details: action.payload,
        loading: true,
        error: null,
      };
    case SAVE_BASIC_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case SAVE_BASIC_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const deliveryInitialState = {
  locationId: "",
  deliveryTime: [
    {
      deliveryServiceTimeFrom: "",
      deliveryServiceTimeTo: "",
    },
  ],
  deliveryPayment: [],
  scheduledDelivery: null,
  minimumOrderPrice: null,
  maximumOrderPrice: null,
  scheduledDeliveryDuration: null,
  packagingCharge: null,
  deliveryOption: {
    inHouse: {
      isEnabled: false,
      maximumRadius: null,
      cashInDelivery: null,
      batchOrder: null,
      defaultCountBatchOrder: null,
      feesStructure: null,
      initialMileAmount: null,
      addEventListenerdditional1MileAmount: null,
      flatFee: null,
    },
    thirdParty: {
      isEnabled: false,
      thirdParty: [],
      dunzoId: null,
      doorDashId: null,
      uberEatsId: null,
    },
  },
};

export const deliveryDataReducer = (state = deliveryInitialState, action) => {
  switch (action.type) {
    case POST_DELIVERY_DATA_REQUEST:
      return {
        ...state,
        locationId: action.payload.locationId,
        delivery: action.payload.delivery,
        deliveryOption: action.payload.deliveryOption,
      };

    case POST_DELIVERY_DATA_SUCCESS:
      return {
        ...state,
        locationId: action.payload.locationId,
        delivery: action.payload.delivery,
        deliveryOption: action.payload.deliveryOption,
      };

    case POST_DELIVERY_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
