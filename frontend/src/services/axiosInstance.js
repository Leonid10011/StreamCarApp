import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use environment variable for the base URL
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve the token from localStorage or use context if available

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
