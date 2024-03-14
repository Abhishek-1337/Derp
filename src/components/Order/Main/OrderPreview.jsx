import TableField from "../../../shared/components/TableField";
import TableHead from "../../../shared/components/TableHead";

const OrderPreview = ({ orderDetails, subTotal, calculateTaxOnItem }) => {
  return (
    <table className="mt-4 table-fixed w-full">
      <TableHead
        data={["PRODUCT", "QUANTITY", "PRICE", "TAX", "TOTAL PRICE"]}
      />
      <tbody>
        {orderDetails.map((order) => {
          return (
            <tr
              key={order.order_id}
              className="text-center text-[12px] md:text-[14px]"
            >
              <TableField data={order.product_name} />
              <TableField data={order.quantity} />
              <TableField data={order.price} />
              <TableField
                data={
                  <span className="bg-green-400 p-1 rounded-lg font-medium md:text-[13px] text-[12px]">
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
  );
};

export default OrderPreview;
