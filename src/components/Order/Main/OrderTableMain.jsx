import DeleteIcon from "../../../shared/icons/DeleteIcon";
import Modal from "../../../shared/components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TableField from "../../../shared/components/TableField";
import DeleteDataInModal from "../../../shared/components/DeleteDataInModal";
import { orderActions } from "../../../store/slice/order";
import OrderEditableField from "./../OrderEditableField";
import Pagination from "../../../shared/components/Pagination";
import TableHead from "../../../shared/components/TableHead";

const OrderTableMain = ({ orderData, productData, pageSize }) => {
  const dispatch = useDispatch();

  const [modalDialog, setModalDialog] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [orderToBeDeleted, setOrderToBeDeleted] = useState(null);
  const [currentPageData, setCurrentPageData] = useState([]);

  const handleCurrentPageData = (data) => {
    setCurrentPageData(data);
  };

  const calculateTaxOnItem = (order) => {
    return (
      order.price * order.quantity +
      (order.price * order.quantity * 10) / 100
    ).toFixed(2);
  };

  const modalDialogHandler = (userOrder) => {
    const orderedItems = userOrder.order_items;
    const result = [];
    let total = 0;
    orderedItems.forEach((order) => {
      let orderedProduct = productData.filter(
        (product) => product.product_id === order.product_id
      );
      const obj = orderedProduct[0];
      const newObj = { ...obj };
      newObj.quantity = order.quantity;
      delete newObj.quantity_in_stock;
      total += +calculateTaxOnItem(newObj);
      result.push(newObj);
    });
    setSubTotal(total);
    setOrderDetails(result);
    setModalDialog(true);
  };

  const handleModalOnCancel = () => {
    setModalDialog(false);
    setOrderToBeDeleted(null);
  };

  const deleteOrderHandler = (order) => {
    setModalDialog(true);
    setOrderToBeDeleted(order.order_id);
  };

  const dispatchDeleteOrder = (id) => {
    dispatch(orderActions.deleteOrder(id));
    handleModalOnCancel();
  };

  return (
    <>
      <div className="overflow-auto p-1">
        <Modal
          isOpen={modalDialog}
          onCancel={handleModalOnCancel}
          title={orderToBeDeleted ? "Delete order" : "Order details"}
          additionalStyles={`${
            orderToBeDeleted ? "max-w-[500px]" : "min-w-[900px]"
          }`}
          data={
            orderToBeDeleted ? (
              <DeleteDataInModal
                handleModalOnCancel={handleModalOnCancel}
                dispatchDeleteItem={dispatchDeleteOrder}
                itemToDeleteId={orderToBeDeleted}
              />
            ) : (
              <table className=" w-full mt-4 table-fixed">
                <TableHead
                  data={["PRODUCT", "QUANTITY", "PRICE", "TAX", "TOTAL PRICE"]}
                />
                <tbody>
                  {orderDetails.map((order) => {
                    return (
                      <tr
                        key={order.order_id}
                        className="text-center text-[14px]"
                      >
                        <TableField data={order.product_name} />
                        <TableField data={order.quantity} />
                        <TableField data={order.price} />
                        <TableField
                          data={
                            <span className="bg-green-400 p-1 rounded-lg font-medium text-[13px]">
                              GST 10%
                            </span>
                          }
                        />
                        <TableField data={calculateTaxOnItem(order)} />
                      </tr>
                    );
                  })}

                  <tr className=" text-center text-[14px] bg-gray-400">
                    <TableField data="Sub total" />
                    <TableField />
                    <TableField />
                    <TableField />
                    <TableField data={subTotal.toFixed(2)} />
                  </tr>
                </tbody>
              </table>
            )
          }
        />
        <table className="min-w-[720px] md:w-full mt-4 table-fixed">
          <TableHead
            data={["ORDER ID", "CUSTOMER", "ORDER DATE", "STATUS", "ACTION"]}
          />

          <tbody>
            {currentPageData &&
              currentPageData.map((item) => {
                return (
                  <tr key={item.order_id} className="text-center text-[14px]">
                    <TableField
                      data={
                        <button
                          className="font-medium p-1 pr-3 pl-3 rounded-lg  border-[1px] border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer transition-all"
                          onClick={() => modalDialogHandler(item)}
                        >
                          {item.order_id}
                        </button>
                      }
                      additionalStyles="p-0"
                    />
                    <TableField data={item.customer_name} />
                    <TableField data={item.order_date} />

                    <OrderEditableField item={item} />
                    <TableField
                      data={
                        <button
                          className="cursor-pointer bg-red-700 p-1 rounded"
                          onClick={() => deleteOrderHandler(item)}
                        >
                          <DeleteIcon />
                        </button>
                      }
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
        data={orderData}
      />
    </>
  );
};

export default OrderTableMain;
