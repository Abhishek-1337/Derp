import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  productName: Yup.string()
    .min(3, "Product name must be at least 3 characters")
    .max(15, "Product name must be at most 15 characters")
    .required("Product name is required"),
  price: Yup.number()
    .min(5, "Price value must be atleast 5")
    .max(5000, "Price value must be atmost 5000")
    .required("Price value is required"),
  category: Yup.string()
    .min(4, "Category name must be atleast 5 characters")
    .max(15, "Category name must be at most 15 characters")
    .required("Category is required"),
  quantity: Yup.number()
    .min(1, "Quantity value must be atleast 5")
    .max(5000, "Quantity value must be atmost 5000")
    .required("Quantity value is required"),
});

const ProductForm = ({ name, category, price, quantity }) => {
  const onFormSubmit = (values, resetForm) => {
    values.productName = values.productName.trim();

    resetForm();
  };

  useEffect(() => {
    formik.setFieldValue("productName", name);
    formik.setFieldValue("price", price);
    formik.setFieldValue("category", category);
    formik.setFieldValue("quantity", quantity);
  }, [name, price, category, quantity]);

  console.log(name, category, price);
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: 0,
      category: "",
      quantity: 0,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values, resetForm);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex gap-3 text-xs leading-6 mb-2">
        <label
          htmlFor="productName"
          className="before:content-['*'] before:text-red-700"
        >
          Product Name:
        </label>
        <div className="">
          <input
            className=" text-black outline-none border-2 border-gray-400 p-2 h-7 rounded-xl"
            type="text"
            name="productName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
          />
          {formik.touched.productName && formik.errors.productName ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.productName}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex gap-3 justify-between text-xs leading-6 mb-2">
        <label
          htmlFor="category"
          className="before:content-['*'] before:text-red-700"
        >
          Category:
        </label>
        <div className="">
          <input
            className=" text-black outline-none border-2 border-gray-400 p-2 h-7 rounded-xl"
            type="text"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.category}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between text-xs leading-6 mb-2">
        <label
          htmlFor="price"
          className="before:content-['*'] before:text-red-700"
        >
          Price:
        </label>
        <div className="">
          <input
            className=" text-black outline-none border-2 border-gray-400 p-2 h-7 rounded-xl"
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.price}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between text-xs leading-6 mb-2">
        <label
          htmlFor="quantity"
          className="before:content-['*'] before:text-red-700"
        >
          Stock Quantity:
        </label>
        <div className="">
          <input
            className=" text-black outline-none border-2 border-gray-400 p-2 h-7 rounded-xl"
            type="number"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.quantity}
            </div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="text-xs p-2 bg-blue-600 rounded-lg mt-4 text-white hover:scale-105"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ProductForm;
