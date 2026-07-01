import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 40 : 0;

  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">🛒 Cart is Empty</h1>

        <Link
          to="/food"
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Browse Foods
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between bg-white rounded-xl shadow p-5 mb-5"
        >
          <div className="flex gap-5 items-center">

            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div>
              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-500">
                ₹{item.price}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item._id))
              }
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>

            <span className="font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item._id))
              }
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>

          </div>

          <div>

            <button
              onClick={() =>
                dispatch(removeFromCart(item._id))
              }
              className="text-red-500 font-semibold"
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <div className="bg-white rounded-xl shadow p-6 mt-10">

        <div className="flex justify-between mb-3">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>

        <hr />

        <div className="flex justify-between mt-4 text-2xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <Link to="/checkout">
          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Cart;