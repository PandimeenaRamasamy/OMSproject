import axios from "axios"

export const baseURL = "http://192.168.1.20:8080/outlet/delivery"

export const PostDeliveryDataEndPoint = async (payload) => {
    try{
        const response = await axios.post(baseURL, payload, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        return {data: response.data, status : response.status}
    }catch(error){
        console.error(error)
        throw new Error("Error in Posting delivery data")
    }
}