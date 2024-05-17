import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json;version=v1_web",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("@Token-b2bit");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
