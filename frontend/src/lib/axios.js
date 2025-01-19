import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:300/api/v1",
  withCredentials: true,
});
