import axios from "axios";

export const postOutletRegistration = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.20:8080/outlets/outlet/registration",
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
      "http://192.168.1.20:8080/outlet/8dfe7674-709d-431c-a233-628e839ecc76"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostOnboardingData = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.20:8080/outlets/outlet/onBoarding",
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
      "http://192.168.1.20:8080/outlet/dineIn",
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

export const PostBasicdetails = async (payload) => {
  try {
    const response = await axios.post(
      "http://192.168.1.20:8080/outlets/outlet/basicDetails/properties",
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const postDeliveryDataURL =
  "http://192.168.1.20:8080/outlets/outlet/delivery/properties";

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

// export const basicDetailUrl =
//   "";

// export const Post = async (payload) => {
//   try {
//     const response = await axios.post(basicDetailUrl, payload, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return { data: response.data, status: response.status };
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error Saving the basic details");
//   }
// };
