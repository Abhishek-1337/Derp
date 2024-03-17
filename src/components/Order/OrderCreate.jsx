import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { orderActions } from "../../store/slice/order";
import { alertActions } from "../../store/slice/alert";

const OrderCreate = ({ productData, onCancel }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [validationSchema, setValidationSchema] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let schema;
    if (product) {
      schema = Yup.object({
        customerName: Yup.string()
          .min(3, "Customer name must be at least 3 characters")
          .max(15, "Customer name must be at most 15 characters")
          .required("Customer name is required"),
        categoryDropdown: Yup.string().required("Category should be selected"),
        productDropdown: Yup.string().required(
          "Product should be selected to place an order"
        ),
        quantity: Yup.number()
          .min(1, "Quantity should be at least 1")
          .max(
            product?.quantity_in_stock,
            `Only ${product?.quantity_in_stock} are left`
          )
          .required("Quantity is needed for order"),
      });
    } else {
      schema = Yup.object({
        customerName: Yup.string()
          .min(3, "Customer name must be at least 3 characters")
          .max(15, "Customer name must be at most 15 characters")
          .required("Customer name is required"),
        categoryDropdown: Yup.string().required("Category should be selected"),
        productDropdown: Yup.string().required(
          "Product should be selected to place an order"
        ),
        quantity: Yup.number()
          .min(1, "Quantity should be at least 1")
          .required("Quantity is needed for order"),
      });
    }
    setValidationSchema(schema);
  }, [product, productData]);

  const onFormSubmit = (values, resetForm) => {
    values.categoryDropdown = values.categoryDropdown.trim();
    values.productDropdown = values.productDropdown.trim();
    values.quantity = +values.quantity;
    dispatch(orderActions.createOrder({ ...values, id: product.product_id }));
    dispatch(
      alertActions.setAlertData({
        status: "success",
        message: "Order created successfully",
      })
    );
    setProduct(null);
    setQuantity(0);
    onCancel();
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      customerName: "",
      categoryDropdown: "",
      productDropdown: "",
      quantity: 0,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values, resetForm);
    },
  });

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setProduct(null); // Reset product when category changes
    formik.setFieldValue("categoryDropdown", e.target.value);
    formik.setFieldValue("categoryDropdown", e.target.value);
  };

  const handleProductChange = (e) => {
    const orderingProduct = productData.find(
      (item) => item.product_name === e.target.value
    );
    setProduct(orderingProduct);
    formik.setFieldValue("productDropdown", e.target.value);
  };

  const handleQualityChange = (e) => {
    setQuantity(e.target.value);
    formik.setFieldValue("quantity", e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {!category ? (
        <div className="text-blue-600 text-[12px] mb-5">
          *Select category before selecting product
        </div>
      ) : null}
      <div className="flex gap-3 text-sm leading-6 mb-2">
        <label htmlFor="customerName" className="text-gray-700 font-medium">
          Customer Name:
        </label>
        <div>
          <input
            type="text"
            id="customerName"
            value={formik.values.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Customer name"
            className="outline-none rounded-lg border-2 pl-1 pr-1 border-gray-400 max-w-[170px]"
          />

          {formik.touched.customerName && formik.errors.customerName ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.customerName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex gap-3 text-sm leading-6 mb-2">
        <label htmlFor="categoryDropdown" className="text-gray-700 font-medium">
          Category:
        </label>
        <div>
          <select
            id="categoryDropdown"
            className="outline-none rounded-lg border-2 border-gray-400 p-1"
            onChange={handleCategoryChange}
            value={formik.values.categoryDropdown}
          >
            <option className="font-medium">Select Category</option>
            {[...new Set(productData.map((product) => product.category))].map(
              (category) => {
                return (
                  <option key={category} onClick={() => setCategory(category)}>
                    {category}
                  </option>
                );
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
      <div className="flex gap-3 text-sm leading-6 mb-2">
        <label htmlFor="productDropdown" className="text-gray-700 font-medium">
          Product:
        </label>
        <div>
          <select
            id="productDropdown"
            className="outline-none rounded-lg border-2 border-gray-400 p-1 max-w-[170px]"
            onChange={handleProductChange}
            value={formik.values.productDropdown}
            disabled={!category}
          >
            <option className="font-medium">Select Product</option>

            {productData
              .filter((product) => product.category === category)
              .map((product) => {
                return (
                  <option key={product.product_id}>
                    {product.product_name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="flex gap-3 text-sm leading-6">
        <label htmlFor="quantity" className="text-gray-700 font-medium">
          Quantity:
        </label>
        <div>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQualityChange}
            onBlur={formik.handleBlur}
            placeholder="quantity"
            className={`outline-none rounded-lg border-2 pl-1 pr-1 border-gray-400 max-w-[170px] ${
              !product ? "opacity-30" : ""
            }`}
            disabled={!product}
          />

          {formik.touched.quantity && formik.errors.quantity ? (
            <div className="text-red-600 text-[10px]">
              {formik.errors.quantity}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-between text-xs items-center mt-4">
        <button
          type="submit"
          className={`p-2 bg-blue-600 rounded-lg  text-white  transition-all ${
            !formik.isValid || !formik.dirty ? "opacity-50" : "hover:scale-105"
          }`}
          disabled={!formik.isValid || !formik.dirty}
        >
          Save order
        </button>
        <span>
          Total Price:{" "}
          {+quantity ? (+quantity * +product?.price).toFixed(2) : "0.00"}
        </span>
      </div>
    </form>
  );
};

export default OrderCreate;
