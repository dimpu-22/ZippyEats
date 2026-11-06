import axios from "axios";

const api = axios.create({
  baseURL: "https://zippy-eats-2zxc.vercel.app/api",
});

export default api;