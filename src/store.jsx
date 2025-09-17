import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./services/CategoryApi";
import cartSlice from "./componenets/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});
