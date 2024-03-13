import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { uniqueProduct } from "../../shared/utils/validate";

const validationSchema = Yup.object({
  productName: Yup.string()
    .min(3, "Product name must be at least 3 characters")
    .max(30, "Product name must be at most 15 characters")
    .required("Product name is required")
    .test("is-unique", "Product name already exist", function (value) {
      return uniqueProduct(value);
    }),
  price: Yup.number()
    .min(5, "Price value must be atleast 5")
    .max(5000, "Price value must be atmost 5000")
    .required("Price value is required"),
  category: Yup.string().required("Category is required"),
  quantity: Yup.number()
    .min(1, "Quantity value must be atleast 5")
    .max(5000, "Quantity value must be atmost 5000")
    .required("Quantity value is required"),
});

const ProductForm = ({
  productDetails,
  onCancel,
  dispatchUpdateDataAction,
  productData,
}) => {
  const { id } = productDetails;

  const onFormSubmit = (values, resetForm) => {
    values.productName = values.productName.trim();
    values.category = values.category.trim();
    if (id) {
      dispatchUpdateDataAction({ id, values });
    } else {
      dispatchUpdateDataAction({ values });
      resetForm();
    }
    onCancel();
  };

  useEffect(() => {
    formik.setFieldValue("productName", productDetails?.name);
    formik.setFieldValue("price", productDetails?.price);
    formik.setFieldValue("category", productDetails?.category);
    formik.setFieldValue("quantity", productDetails?.quantity);
  }, [productDetails]);

  console.log("productdetals");

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
            id="productName"
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
        <div>
          <select
            id="category"
            className="outline-none rounded-lg border-2 border-gray-400 p-1"
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            <option className="font-medium">Category</option>
            {[...new Set(productData.map((product) => product.category))].map(
              (category) => {
                return <option key={category}>{category}</option>;
              }
            )}
          </select>
          {formik.touched.categoryDropdown && formik.errors.categoryDropdown ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.categoryDropdown}
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
            id="price"
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
            id="quantity"
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
