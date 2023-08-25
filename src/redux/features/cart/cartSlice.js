import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.products += 1;
    // },
    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    // removeOne: (state, action) => {
    //   const existing = state.products.find(
    //     (product) => product._id === action.payload._id
    //   );
    //   if (existing && existing.quantity > 1) {
    //     existing.quantity = existing.quantity - 1;
    //   } else {
    //     state.products = state.products.filter(
    //       (product) => product._id !== action.payload._id
    //     );
    //     //  state.products.push({ ...action.payload, quantity: 1 });
    //   }
    //   //   state.total -= action.payload.price;
    // },
    // removeFromCart: (state, action) => {
    //   state.products = state.products.filter(
    //     (product) => product._id !== action.payload._id
    //   );
    //   state.total -= action.payload.price * action.payload.quantity;
    // },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
