import axios from 'axios'

// Create an Axios instance
const axiosInstance = axios.create({
 baseURL: 'https://tech-maverics.onrender.com', // Your API base URL
 withCredentials: true // Ensure cookies are included in requests
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
 (config) => config,
 (error) => Promise.reject(error)
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
 (response) => response,
 (error) => Promise.reject(error)
)

export default axiosInstance
