const Order = require("../models/Order");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get My Orders
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getMyOrders,
};