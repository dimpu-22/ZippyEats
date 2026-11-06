import axios from "axios";

const api = axios.create({
  baseURL: "https://zippy-eats-2zxc-587rxaabz-dimpu2.vercel.app/api",
});

export default api;