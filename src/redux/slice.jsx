import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

function setLocalStorage(state) {
  localStorage.setItem("cartItems", JSON.stringify(state));
}

const initialState = {
  cart: items,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload.item;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        return;
      } else {
        state.cart = [...state.cart, newItem];
        toast.success("Product was added to the cart!");
      }
      setLocalStorage(state.cart.map((item) => item));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      toast.error("Product was removed from the cart");
      setLocalStorage(state.cart.map((item) => item));
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
