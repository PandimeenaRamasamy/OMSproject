import axios from "axios";

export const postOutletRegistration = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/registration",
      payload
    );
    console.log("payload",payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostBasicdetails = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/basicDetails/properties",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export const GetData = async () => {
  try {
    const response = await axios.get(
      "http://192.168.1.12:5000/outlets/outlet/listOfLocation/8dfe7674-709d-431c-a233-628e839ecc76"
    );
    console.log( (response.data))
    return response;
  } catch (error) {
    throw error;
  }
};
// 9797ce29-1ef1-4c08-ab2d-bea899750bc6

export const GetLocationData = async (loactioId) => {
  try {
    
    const response = await axios.get(
      `http://192.168.1.12:5000/outlets/outlet/${loactioId}`
    );
    console.log( (response.data))
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostOnboardingData = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/onBoarding",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostDineinData = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/dineIn/properties",
      payload,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const postDeliveryDataURL =
  "http://192.168.1.12:5000/outlets/outlet/delivery/properties";

export const PostDeliveryDataEndPoint = async (payload) => {
  try {
    const response = await axios.post(postDeliveryDataURL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(error);
    throw new Error("Error in Posting delivery data");
  }
};

export const PostRestaurantImage = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/restImg/properties",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};




export const PostPickup = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/pickUp/properties",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export const PostKitchen = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.12:5000/outlets/outlet/kitchen/properties",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};

