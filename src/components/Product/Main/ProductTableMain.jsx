import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import EditIcon from "../../../shared/components/EditIcon";
import DeleteIcon from "../../../shared/components/DeleteIcon";
import Modal from "../../../shared/components/Modal";
import ProductForm from "../ProductForm";
import { productActions } from "../../../store/slice/product";

const ProductTableMain = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.data);
  const [modalDialog, setModalDialog] = useState(false);
  const [productEdit, setProductEdit] = useState({});
  const [isEditClick, setIsEditClicked] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(null);

  const modalDialogHandler = (item) => {
    const productDetails = {
      id: item.product_id,
      name: item.product_name,
      price: item.price,
      category: item.category,
      quantity: item.quantity_in_stock,
    };
    setProductEdit(productDetails);
    setModalDialog(true);
    setIsEditClicked(true);
  };

  const handleModalOnCancel = () => {
    setModalDialog(false);
  };

  const deleteProductHandler = (item) => {
    // dispatch(productActions.deleteData(item.product_id));
    setItemToDeleteId(item.product_id);
    setModalDialog(true);
    setIsEditClicked(false);
  };

  const dispatchDeleteProduct = (id) => {
    dispatch(productActions.deleteData(id));
  };

  const dispatchUpdateProduct = (obj) => {
    dispatch(productActions.updateData(obj));
  };

  return (
    <div className="overflow-auto p-1">
      <Modal
        isOpen={modalDialog}
        onCancel={handleModalOnCancel}
        title={isEditClick ? "Edit Product" : "Delete Product"}
        data={
          isEditClick ? (
            <ProductForm
              productDetails={productEdit}
              onCancel={handleModalOnCancel}
              dispatchUpdateDataAction={dispatchUpdateProduct}
            />
          ) : (
            <div className="flex flex-col w-full justify-between">
              <div className="mb-2 font-base">Are you sure?</div>
              <div className="flex justify-end">
                <button
                  onClick={() => dispatchDeleteProduct(itemToDeleteId)}
                  className="bg-red-700 text-white text-[12px] md:text-xs p-1 rounded-lg mr-2 hover:scale-110 transition-all"
                >
                  Confirm
                </button>
                <button
                  onClick={handleModalOnCancel}
                  className="border-blue-700 border-[1px] text-blue-700 text-[12px] md:text-xs p-1 rounded-lg hover:scale-110 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )
        }
      />
      <table className="min-w-[720px] md:w-full mt-4 table-fixed">
        <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
          <th className="font-medium mr-2">NAME</th>
          <th className="font-medium mr-2">CATEGORY</th>
          <th className="font-medium mr-2">PRICE</th>
          <th className="font-medium mr-2">QUANTITY</th>
          <th className="font-medium mr-2">ACTION</th>
        </tr>
        {productData.map((item) => {
          return (
            <tr key={item.product_id} className="text-center text-[14px]">
              <td className="border-r-2 border-b-2 p-1">{item.product_name}</td>
              <td className="border-r-2 border-b-2 p-1">{item.category}</td>
              <td className="border-r-2 border-b-2 p-1">{item.price}</td>
              <td className="border-r-2 border-b-2 p-1">
                {item.quantity_in_stock}
              </td>
              <td className="border-r-2 border-b-2 p-1 flex justify-center gap-1">
                <div
                  id={item.product_id}
                  className="cursor-pointer bg-cyan-500 p-1 rounded"
                  onClick={() => modalDialogHandler(item)}
                >
                  <EditIcon />
                </div>
                <div
                  className="cursor-pointer bg-red-700 p-1 rounded"
                  onClick={() => deleteProductHandler(item)}
                >
                  <DeleteIcon />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTableMain;
