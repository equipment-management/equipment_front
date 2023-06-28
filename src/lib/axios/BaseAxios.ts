import axios from "axios";
import baseURL from "./baseURL";

const API = axios.create({
  baseURL,
  timeout: 1000,
});

delete API.defaults.headers.common["Authorization"];

export default API;
