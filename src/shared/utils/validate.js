import store from "../../store/index";

export const uniqueProduct = (value) => {
  const arr = store.getState().product.data;
  console.log(arr);
  return arr.find((product) => product.product_name === value);
};
