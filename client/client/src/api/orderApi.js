import api from "./api";

// Place Order
export const placeOrder = async (orderData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.post("/orders", orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Place Order Error:", error);
    throw error;
  }
};

// Get My Orders
export const getMyOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("/orders/my-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Get Orders Error:", error);
    throw error;
  }
};