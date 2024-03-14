import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/product";
import orderSlice from "./slice/order";
import alertSlice from "./slice/alert";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    order: orderSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
