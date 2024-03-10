import { createSlice } from "@reduxjs/toolkit";
import products from "../../../data/product.json";

const initialState = {
  data: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateData(state, action) {
      const product = action?.payload;
      state.data.map((item) => {
        if (item.product_id === product.id) {
          item.category = product.values?.category;
          item.price = product.values?.price;
          item.product_name = product.values?.productName;
          item.quantity_in_stock = product.values?.quantity;
        }
      });
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
