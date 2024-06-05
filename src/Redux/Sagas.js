import { PostDeliveryDataEndPoint } from "./API"
import { PostDeliveryDataFailure, PostDeliveryDataSuccess } from "./Actions"
import { call, put } from "redux-saga/effects"

export function* PostDeliveryDataSagas(action){
    try{
        const payload = action.payload
        const response = yield call(PostDeliveryDataEndPoint, payload)
        if(response.status === 200 ){
            yield put(PostDeliveryDataSuccess(response.data))
            console.log("Posted Successfully")
        }  
    }catch(error){
        yield put(PostDeliveryDataFailure(error))
    }
}



