import api from "./api";

// Get All Restaurants
export const getRestaurants = async () => {
  const response = await api.get("/restaurants");
  return response.data;
};

// Get Restaurant By ID
export const getRestaurantById = async (id) => {
  const response = await api.get(`/restaurants/${id}`);
  return response.data;
};