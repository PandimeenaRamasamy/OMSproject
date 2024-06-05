import { POST_DELIVERY_DATA_FAILURE, POST_DELIVERY_DATA_REQUEST, POST_DELIVERY_DATA_SUCCESS } from "./Constants"

export const PostDeliveryDataRequest = (payload) => (
    {
    type: POST_DELIVERY_DATA_REQUEST,
    payload: payload
})

export const PostDeliveryDataSuccess = (response) => ({
    type: POST_DELIVERY_DATA_SUCCESS,
    payload: response
})

export const PostDeliveryDataFailure = (error) => ({
    type: POST_DELIVERY_DATA_FAILURE,
    payload: error
})