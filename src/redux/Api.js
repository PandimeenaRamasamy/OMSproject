import axios from 'axios';

export const postOutletRegistration = async (payload) => {
  try {
    const response = await axios.post('http://192.168.1.20:8080/outlets/outlet/registration', payload);
    return response;
  } catch (error) {
    throw error;
  }
};


export const GetData = async () => {
  try {
    const response = await axios.get('http://192.168.1.20:8080/outlet/8dfe7674-709d-431c-a233-628e839ecc76');
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostOnboardingData = async (payload) => {
  try {
    const response = await axios.post('http://192.168.1.20:8080/outlets/outlet/onBoarding',payload);
    return response;
  } catch (error) {
    throw error;
  }
};

 export const  PostDineinData=async(payload)=>{

  try {
    const response = await axios.post('http://192.168.1.20:8080/outlets/outlet/dineIn/properties',payload,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response;
  } catch (error) {
    throw error;
  }

}