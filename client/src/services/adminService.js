import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ================= JWT Token =================
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ================= Dashboard =================
export const getDashboardStats = () =>
  API.get("/admin/dashboard");

// ================= Restaurant APIs =================
export const getRestaurants = () =>
  API.get("/admin/restaurants");

export const createRestaurant = (restaurantData) =>
  API.post("/admin/restaurants", restaurantData);

export const updateRestaurant = (id, restaurantData) =>
  API.put(`/admin/restaurants/${id}`, restaurantData);

export const deleteRestaurant = (id) =>
  API.delete(`/admin/restaurants/${id}`);

// ================= Food APIs =================
export const getFoods = () =>
  API.get("/admin/foods");

export const createFood = (foodData) =>
  API.post("/admin/foods", foodData);

export const updateFood = (id, foodData) =>
  API.put(`/admin/foods/${id}`, foodData);

export const deleteFood = (id) =>
  API.delete(`/admin/foods/${id}`);

export default API;