import axios from 'axios';

const API_URL = "http://demo8217962.mockable.io/login";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: { username, password },
    });
      return response.data; 
    //   console.log(response.data);
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed");
  }
};