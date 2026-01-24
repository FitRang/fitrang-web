import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/",
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    "x-user-email": "john2@example.com",
  },
});

axiosInstance.interceptors.request.use((config) => {
  console.log("AXIOS HEADERS:", config.headers);
  console.log("AXIOS BODY:", config.data);
  return config;
});

export default axiosInstance;
