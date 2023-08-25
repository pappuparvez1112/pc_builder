import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
});
