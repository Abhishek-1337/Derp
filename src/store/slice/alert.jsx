import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  message: "",
};
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlertData(state, action) {
      state.data = action.payload;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
