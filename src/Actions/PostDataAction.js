
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const POST_ONBOARDING_DATA_REQUEST = 'POST_ONBOARDING_DATA_REQUEST';
export const  POST_ONBOARDING_DATA_SUCCESS="POST_ONBOARDING_DATA_SUCCESS";
export const POST_ONBOARDING_DATA_FAILURE="POST_ONBOARDING_DATA_FAILURE"

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

export const postOnBoardingDataRequest=(data)=>{
  return{
    type:POST_ONBOARDING_DATA_REQUEST,
    payload:data
  }
  
}

export const postOnBoardingDataSuccess=(response)=>{
  return{
    type:POST_ONBOARDING_DATA_SUCCESS,
    payload:response
  }
  
}

export const postOnBoardingDataFailure=(error)=>{
  return{
    type:POST_ONBOARDING_DATA_FAILURE,
    payload:error
  }
  
}