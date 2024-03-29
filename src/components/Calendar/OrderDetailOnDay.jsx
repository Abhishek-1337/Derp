import { useState } from "react";
import TableField from "../../shared/components/TableField";
import Modal from "../../shared/components/Modal";

const OrderDetailOnDay = ({ orderDeliveries, day }) => {
  const [modalDialog, setModalDialog] = useState(false);
  const handleModalOnCancel = () => {
    setModalDialog(false);
  };

  function orderDetailModal() {
    setModalDialog(true);
  }

  const handleClick = () => {
    orderDeliveries.length !== 0 && orderDetailModal();
  };
  return (
    <>
      {modalDialog && (
        <Modal
          isOpen={modalDialog}
          onCancel={handleModalOnCancel}
          title="Order details"
          additionalStyles="font-medium"
          data={
            <table className=" w-full mt-4 table-fixed">
              <thead>
                <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
                  <th className="font-medium mr-2">CUSTOMER</th>
                  <th className="font-medium mr-2">ORDER ID</th>
                </tr>
              </thead>
              <tbody>
                {orderDeliveries.map((order) => {
                  return (
                    <tr
                      key={order.order_id}
                      className="text-center text-[14px]"
                    >
                      <TableField data={order.customer_name} />
                      <TableField data={order.order_id} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
      )}
      <div
        className={`${
          day == null ? "bg-red-300" : ""
        } bg-blue-300 border-2 p-2 text-xs md:text-sm relative ${
          orderDeliveries.length !== 0 &&
          "bg-green-400 text-white cursor-pointer"
        } h-[60px] md:h-[70px] w-full hover:bg-white hover:text-black hover:border-2 hover:border-green-500`}
        onClick={handleClick}
      >
        {day !== null && day}
        {orderDeliveries.length !== 0 && (
          <span className="block text-[12px] md:text-[14px] text-blue-900">
            {`${orderDeliveries.length} ${
              orderDeliveries.length === 1 ? "order due" : "orders due"
            }`}
          </span>
        )}
      </div>
    </>
  );
};

export default OrderDetailOnDay;
