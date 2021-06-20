import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.VUE_APP_ENVIRONMENT === "localhost"
      ? "http://localhost:8080/"
      : process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCarsList() {
    return apiClient.get("S3US");
  },
};
