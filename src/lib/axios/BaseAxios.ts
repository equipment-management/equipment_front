import axios from "axios";
import baseURL from "./baseURL";

const API = axios.create({
  baseURL,
  timeout: 1000,
});

export default API;
