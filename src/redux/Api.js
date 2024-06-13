import axios from 'axios';

export const postOutletRegistration = async (payload) => {
  try {
    const response = await axios.post('http://192.168.1.20:8080/outlets/outlet/registration', payload);
    return response;
  } catch (error) {
    throw error;
  }
};