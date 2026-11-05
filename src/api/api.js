import axios from "axios";

const api = axios.create({
  baseURL: "https://zippyeats-backend-glqy.onrender.com/api",
});

export default api;