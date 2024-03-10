import { createSlice } from "@reduxjs/toolkit";
import products from "../../../data/product.json";

const initialState = {
  data: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice;
