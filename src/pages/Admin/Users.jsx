import { useEffect, useState } from "react";
import { getOrders } from "../../services/adminOrderService";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Manage Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-gray-500 text-lg">
            No orders found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Order #{order._id?.slice(-6)}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">
                      Customer:
                    </span>{" "}
                    {order.user?.name || "Unknown"}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold">
                      Email:
                    </span>{" "}
                    {order.user?.email || "N/A"}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold">
                      Total Amount:
                    </span>{" "}
                    ₹ {order.totalAmount}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold">
                      Items:
                    </span>{" "}
                    {order.items?.length || 0}
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className={`px-4 py-2 rounded-lg text-white font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-600"
                        : order.status === "Preparing"
                        ? "bg-yellow-500"
                        : order.status === "Cancelled"
                        ? "bg-red-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;