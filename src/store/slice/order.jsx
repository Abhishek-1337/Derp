import { createSlice } from "@reduxjs/toolkit";
import orders from "../../../data/order.json";

const initialState = {
  data: orders,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const orderActions = orderSlice.actions;
export default orderSlice;
