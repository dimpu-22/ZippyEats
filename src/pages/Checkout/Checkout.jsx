import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../../redux/slices/cartSlice";
import { placeOrder } from "../../api/orderApi";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      const orderData = {
        items: cartItems.map((item) => ({
          foodId: item._id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: total,
        address: formData.address,
        paymentMethod: formData.payment,
      };

      await placeOrder(orderData);

      dispatch(clearCart());

      alert("🎉 Order Placed Successfully!");

      navigate("/success");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Failed to place order"
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Customer Details */}
        <div className="bg-white shadow rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Delivery Details
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            rows="4"
          />

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between mb-4"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="flex justify-between text-2xl font-bold mt-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleOrder}
            className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Checkout;