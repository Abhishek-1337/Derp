import store from "../../store/index";

export const uniqueProduct = (value) => {
  const arr = store.getState().product.data;
  return arr.find(
    (product) => product.product_name.toLowerCase() === value.toLowerCase()
  );
};
