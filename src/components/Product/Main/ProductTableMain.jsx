import { useDispatch } from "react-redux";
import { useState } from "react";
import EditIcon from "../../../shared/icons/EditIcon";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import Modal from "../../../shared/components/Modal";
import ProductForm from "../ProductForm";
import { productActions } from "../../../store/slice/product";
import TableField from "../../../shared/components/TableField";
import DeleteDataInModal from "../../../shared/components/DeleteDataInModal";
import Pagination from "../../../shared/components/Pagination";

//Prop -> data, entries
const ProductTableMain = ({ pageSize, data }) => {
  const dispatch = useDispatch();
  const [modalDialog, setModalDialog] = useState(false);
  const [productEdit, setProductEdit] = useState({});
  const [isEditClick, setIsEditClicked] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(null);
  const [currentPageData, setCurrentPageData] = useState([]);

  const handleCurrentPageData = (data) => {
    setCurrentPageData(data);
  };

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
    handleModalOnCancel();
  };

  const dispatchUpdateProduct = (obj) => {
    dispatch(productActions.updateData(obj));
    handleModalOnCancel();
  };
  console.log(isEditClick);
  return (
    <>
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
                productData={data}
              />
            ) : (
              <DeleteDataInModal
                dispatchDeleteItem={dispatchDeleteProduct}
                itemToDeleteId={itemToDeleteId}
                handleModalOnCancel={handleModalOnCancel}
              />
            )
          }
        />
        <table className="min-w-[720px] md:w-full mt-4 table-fixed">
          <thead>
            <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
              <th className="font-medium mr-2">NAME</th>
              <th className="font-medium mr-2">CATEGORY</th>
              <th className="font-medium mr-2">PRICE</th>
              <th className="font-medium mr-2">QUANTITY</th>
              <th className="font-medium mr-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr className="text-center ">
                <td></td>
                <td></td>
                <td>No item found</td>
                <td></td>
                <td></td>
              </tr>
            )}
            {currentPageData &&
              currentPageData.map((item) => {
                return (
                  <tr key={item.product_id} className="text-center text-[14px]">
                    <TableField data={item.product_name} />
                    <TableField data={item.category} />
                    <TableField data={item.price} />
                    <TableField data={item.quantity_in_stock} />
                    <TableField
                      data={
                        <>
                          <div
                            id={item.product_id}
                            className="cursor-pointer bg-cyan-500 p-1 rounded"
                            onClick={() => modalDialogHandler(item)}
                          >
                            <EditIcon additionalStyles="text-white" />
                          </div>
                          <div
                            className="cursor-pointer bg-red-700 p-1 rounded"
                            onClick={() => deleteProductHandler(item)}
                          >
                            <DeleteIcon />
                          </div>
                        </>
                      }
                      additionalStyles="flex justify-center gap-1"
                    />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        pageSize={pageSize}
        setCurrentPageData={handleCurrentPageData}
        data={data}
      />
    </>
  );
};

export default ProductTableMain;
