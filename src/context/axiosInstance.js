import axios from 'axios';
import BASE_URL from './baseUrl';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Your API base URL
  withCredentials: true, // Ensure cookies are included in requests
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
