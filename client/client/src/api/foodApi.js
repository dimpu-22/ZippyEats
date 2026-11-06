import api from "./api";

export const getFoods = async () => {
  const response = await api.get("/foods");
  return response.data;
};

export const getFoodsByRestaurant = async (restaurantId) => {
  const response = await api.get(`/foods/restaurant/${restaurantId}`);
  return response.data;
};