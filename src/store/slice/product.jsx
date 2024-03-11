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
    deleteData(state, action) {
      const id = action.payload;
      console.log(action.payload);
      const newData = state.data.filter((item) => item.product_id !== id);
      state.data = newData;
    },
    addData(state, action) {
      const length = state.data.length;
      const obj = action.payload.values;
      console.log(obj);
      const newObj = {
        product_name: obj.productName,
        price: obj.price,
        category: obj.category,
        quantity_in_stock: obj.quantity,
      };
      console.log(newObj);
      newObj.product_id = length + 1;
      const updatedData = [...state.data];
      updatedData.push(newObj);
      state.data = updatedData;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
