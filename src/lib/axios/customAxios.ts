import axios from "axios";

const baseURL = "http://52.78.233.107:2542";

export const API = axios.create({
  baseURL,
  timeout: 10000,
});

export const APIToken = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
