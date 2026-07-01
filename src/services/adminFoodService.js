import api from "./api";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get All Foods
export const getFoods = async () => {
  const response = await api.get("/foods", getToken());
  return response.data;
};

// Add Food
export const createFood = async (foodData) => {
  const response = await api.post(
    "/foods",
    foodData,
    getToken()
  );
  return response.data;
};

// Update Food
export const updateFood = async (id, foodData) => {
  const response = await api.put(
    `/foods/${id}`,
    foodData,
    getToken()
  );
  return response.data;
};

// Delete Food
export const deleteFood = async (id) => {
  const response = await api.delete(
    `/foods/${id}`,
    getToken()
  );
  return response.data;
};