import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add to Cart
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (food) => food._id === action.payload._id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove Item
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (food) => food._id !== action.payload
      );
    },

    // Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (food) => food._id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (food) => food._id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (food) => food._id !== action.payload
          );
        }
      }
    },

    // Clear Cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;