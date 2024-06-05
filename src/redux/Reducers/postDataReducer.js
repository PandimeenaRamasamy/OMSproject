// src/reducers/postDataReducer.js

import {
  POST_DATA_REQUEST,POST_DATA_SUCCESS,POST_DATA_FAILURE,} from "../Actions/PostDataAction";
import {GET_DATA_REQUEST,GET_DATA_SUCCESS, GET_DATA_FAILURE,} from "../Actions/PostDataAction";
import { POST_ONBOARDING_DATA_REQUEST,POST_ONBOARDING_DATA_SUCCESS,POST_ONBOARDING_DATA_FAILURE,} from "../Actions/PostDataAction";
import { POST_DINEIN_DATA_FAILURE,POST_DINEIN_DATA_SUCCESS,POST_DINEIN_DATA_REQUEST } from "../Actions/PostDataAction";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const postDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return { ...state, loading: true,error:null };
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


    default:
      return state;
  }
};

export default postDataReducer;
