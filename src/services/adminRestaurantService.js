import api from "../api/api";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all restaurants
export const getRestaurants = async () => {
  const response = await api.get("/restaurants", getToken());
  return response.data;
};

// Create restaurant
export const createRestaurant = async (restaurantData) => {
  const response = await api.post(
    "/restaurants",
    restaurantData,
    getToken()
  );

  return response.data;
};

// Update restaurant
export const updateRestaurant = async (id, restaurantData) => {
  const response = await api.put(
    `/restaurants/${id}`,
    restaurantData,
    getToken()
  );

  return response.data;
};

// Delete restaurant
export const deleteRestaurant = async (id) => {
  const response = await api.delete(
    `/restaurants/${id}`,
    getToken()
  );

  return response.data;
};