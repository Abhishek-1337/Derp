import { createSlice } from "@reduxjs/toolkit";
import orders from "../../../data/order.json";

const initialState = {
  data: orders,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteOrder(state, action) {
      const id = action.payload;
      const newData = state.data.filter((item) => item.order_id !== id);
      state.data = newData;
    },
    updateStatus(state, action) {
      const id = action.payload.id;
      const status = action.payload.selectedValue;
      state.data.map((order) => {
        if (order.order_id === id) {
          order.status = status;
        }
      });
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
