import api from "./api";

// Get All Foods
export const getFoods = async () => {
  const response = await api.get("/foods");
  return response.data;
};

// Get Foods By Restaurant
export const getFoodsByRestaurant = async (restaurantId) => {
  const response = await api.get(`/foods/restaurant/${restaurantId}`);
  return response.data;
};