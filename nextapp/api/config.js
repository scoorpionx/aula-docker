import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.64:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
