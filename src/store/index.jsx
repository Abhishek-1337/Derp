import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product";
import orderSlice from "./slice/order";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
