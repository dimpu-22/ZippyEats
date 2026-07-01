const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        foodId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
        },

        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: "Cash on Delivery",
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);