// src/reducers/postDataReducer.js

import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_LOCATION_REQUEST,
  GET_DATA_LOCATION_SUCCESS,
  GET_DATA_LOCATION_FAILURE,
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
  POST_RESTAURANTIMAGE_DATA_FALIURE,
  POST_PICKUP_DATA_REQUEST,
  POST_PICKUP_DATA_SUCCESS,
  POST_PICKUP_DATA_FALIURE,
  POST_KITCHEN_DATA_REQUEST,
  POST_KITCHEN_SUCCESS,
  POST_KITCHEN_FALIURE,
  CLEAR_DATA

} from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const registrationinitialstate = {
  data: [],
  loading: false,
  error: null,
};

export const registrationReducer = (
  state = registrationinitialstate,
  action
) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// const  = {
//   restaurantData: {
//     restaurantName: '',
//     name: '',
//     phone: '',
//     email: '',
//     designation: '',
//     gstNumber: '',
//     base64Image: '',
//     loading: false,
//     error: null,
//   }
// };

// export const  = (
//   state = registrationinitialstate,
//   action
// ) => {
//   switch (action.type) {
//     case POST_DATA_REQUEST:
//       return {

//         restaurantData: action.payload,
//         loading: true,
//         error: null,
//       };
//     case POST_DATA_SUCCESS:
//       return {

//         ...action.payload,
//         loading: false,
//         error: null,
//       };
//     case POST_DATA_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const initialStategetlocation = {
  loading: false,
  data: [],
  error: null,
};

export const postDataReducergetLocation = (
  state = initialStategetlocation,
  action
) => {
  switch (action.type) {
    case GET_DATA_LOCATION_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_DATA_LOCATION_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_DATA_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_DATA:
      return initialStategetlocation;

    default:
      return state;
  }
};

export const postDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    
    case POST_DINEIN_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_DINEIN_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_DINEIN_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case POST_RESTAURANTIMAGE_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case POST_RESTAURANTIMAGE_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case POST_RESTAURANTIMAGE_DATA_FALIURE:
      return { ...state, loading: false, error: action.payload };

    case POST_PICKUP_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case POST_PICKUP_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case POST_PICKUP_DATA_FALIURE:
      return { ...state, loading: false, error: action.payload };

    case POST_KITCHEN_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case POST_KITCHEN_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case POST_KITCHEN_FALIURE:
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
  // cuisines: [],
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

const initialStatelocationId = {
  locationId: "",
};

export const nameReducer = (state = initialStatelocationId, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        locationId: action.payload,
      };
    default:
      return state;
  }
};



const onBoardingS = {
  loading: false,
  data: [],
  error: null,
};

export const onBoarding = (state = onBoardingS, action) => {
  switch (action.type) {
    case POST_ONBOARDING_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_ONBOARDING_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_ONBOARDING_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};





