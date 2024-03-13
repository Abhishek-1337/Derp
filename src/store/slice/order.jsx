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
    createOrder(state, action) {
      const orders = state.data;
      const newOrderId = `#${orders.length + 1}`;
      const randomDeliveryDate = new Date(
        new Date().getTime() +
          Math.floor(Math.random() * 21) * 24 * 60 * 60 * 1000
      );
      const order = {
        order_id: newOrderId,
        customer_name: action.payload.customerName,
        status: "Pending",
        order_date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        delivery_data: randomDeliveryDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      };
      order.order_items = [];
      order.order_items.push({
        product_id: action.payload.id,
        quantity: action.payload.quantity,
      });

      orders.push(order);
      state.data = orders;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
