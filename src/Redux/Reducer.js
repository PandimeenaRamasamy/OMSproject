import { POST_DELIVERY_DATA_FAILURE, POST_DELIVERY_DATA_REQUEST, POST_DELIVERY_DATA_SUCCESS } from "./Constants"

const initialState = {
    locationId : "",
    deliveryTime : [{
        deliveryServiceTimeFrom: '',
        deliveryServiceTimeTo: ''
    }],
    deliveryPayment : [],
    scheduledDelivery : null,
    minimumOrderPrice : null,
    maximumOrderPrice : null,
    scheduledDeliveryDuration : null,
    packagingCharge : null,
    deliveryOption : {
        inHouse : {
            isEnabled: false,
            maximumRadius : null,
            cashInDelivery : null,
            batchOrder : null,
            defaultCountBatchOrder : null,
            feesStructure : null,
            initialMileAmount : null,
            addEventListenerdditional1MileAmount : null,
            flatFee : null
        },
        thirdParty : {
            isEnabled: false,
            thirdParty:[],
            dunzoId: null,
            doorDashId: null,
            uberEatsId: null
        }
    }
}


export const deliveryDataReducer = (state= initialState, action) => {
    switch(action.type){
        case POST_DELIVERY_DATA_REQUEST:
            return {
                ...state,
                locationId : action.payload.locationId,
                delivery: action.payload.delivery,
                deliveryOption: action.payload.deliveryOption 
            }   
        
        case POST_DELIVERY_DATA_SUCCESS:
            return {
                ...state,
                locationId : action.payload.locationId,
                delivery: action.payload.delivery,
                deliveryOption: action.payload.deliveryOption 
            }

        case POST_DELIVERY_DATA_FAILURE:
            return {
                ...state,
                error : action.payload
        }   
        default : return state
    }
}