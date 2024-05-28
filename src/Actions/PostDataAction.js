
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';


export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';


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


export const getDataRequest = (data) => ({
  type: GET_DATA_REQUEST,
  payload: data,
});

export const getDataSuccess = (response) => ({
  type: GET_DATA_SUCCESS,
  payload: response,
});

export const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});

