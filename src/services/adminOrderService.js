import api from "./api";

export const getOrders = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};