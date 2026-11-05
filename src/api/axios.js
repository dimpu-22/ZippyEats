import axios from "axios";

const API = axios.create({
  baseURL: "https://zippyeats-backend-glqy.onrender.com/api",
});

export default API;