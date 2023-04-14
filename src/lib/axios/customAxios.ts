import axios from "axios";

const baseURL = "http://15.164.249.181:2542";

export const API = axios.create({
  baseURL,
  timeout: 1000,
});

export const APIToken = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
