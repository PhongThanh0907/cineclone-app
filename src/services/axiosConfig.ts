import axios from "axios";
import { baseURL } from "../constants";

export const axiosConfig = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
