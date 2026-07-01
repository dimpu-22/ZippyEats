import api from "./api";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getUsers = async () => {
  const response = await api.get("/users", getToken());
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`, getToken());
  return response.data;
};