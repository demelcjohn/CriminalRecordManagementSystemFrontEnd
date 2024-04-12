const axios = require("axios");

const apiInstance = axios.create({
  baseURL: "http://localhost:8000", // Your API base URL
  timeout: 5000, // Request timeout (in milliseconds)
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["token"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = apiInstance;
