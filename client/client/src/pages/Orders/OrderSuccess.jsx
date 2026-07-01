import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center">

        <h1 className="text-7xl">🎉</h1>

        <h2 className="text-4xl font-bold mt-5">
          Order Placed Successfully
        </h2>

        <p className="text-gray-500 mt-4">
          Thank you for ordering with ZippyEats.
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <Link
            to="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg"
          >
            Home
          </Link>

          <Link
            to="/orders"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg"
          >
            My Orders
          </Link>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;