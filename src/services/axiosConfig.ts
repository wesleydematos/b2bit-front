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
    const token = localStorage.getItem("@Token-b2bit");

    if (config.url !== "/auth/login/" && token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
