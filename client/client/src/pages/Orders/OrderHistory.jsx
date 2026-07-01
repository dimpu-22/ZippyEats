import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getOrders } from "../../services/orderHistoryService";

const OrderHistory = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      const data = await getOrders(user.uid);

      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  if (orders.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-center">

          <h1 className="text-7xl">📦</h1>

          <h2 className="text-3xl font-bold mt-5">
            No Orders Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Place your first order to see it here.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      <div className="space-y-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  Order ID
                </h2>

                <p className="text-gray-500">
                  {order.id}
                </p>

              </div>

              <div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  {order.status}
                </span>

              </div>

            </div>

            <hr className="my-5" />

            {order.items.map((item) => (

              <div
                key={item.id}
                className="flex justify-between mb-3"
              >

                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>

              </div>

            ))}

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span>
                ₹{order.total}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OrderHistory;