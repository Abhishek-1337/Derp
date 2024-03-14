import DashboardCard from "../../shared/components/DashboardCard";
import MainBodyTopBar from "../../shared/components/MainBodyTopBar";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import CategoryIcon from "../../shared/icons/CategoryIcon";
import ProductIcon from "../../shared/icons/ProductIcon";
import OrderIcon from "../../shared/icons/OrderIcon";
import TotalPriceIcon from "../../shared/icons/TotalPriceIcon";
import { useSelector } from "react-redux";
import TableField from "../../shared/components/TableField";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const productData = useSelector((state) => state.product.data);
  const orderData = useSelector((state) => state.order.data);
  const navigate = useNavigate();

  const categoryCount = [
    ...new Set(productData.map((product) => product.category)),
  ].length;

  const pieces = productData.reduce(
    (accumulator, product) =>
      accumulator + product.quantity_in_stock * product.price,
    0
  );

  const handleMoreOrdersClick = () => {
    navigate("/orders");
  };
  return (
    <AppLayout>
      <MainBodyLayout>
        <MainBodyTopBar heading="Dashboard" />
        <div className="md:grid md:grid-cols-2 gap-2 mt-3">
          <DashboardCard
            description="Active"
            type="Categories"
            value={categoryCount}
            icon={<CategoryIcon additionalStyles="text-white" />}
          />
          <DashboardCard
            description="Amount"
            type="Products"
            value={productData.length}
            additionalStyles="bg-orange-500"
            icon={<ProductIcon additionalStyles="w-5 h-5 text-white" />}
          />
          <DashboardCard
            description="Total"
            type="Orders"
            value={orderData.length}
            additionalStyles="bg-teal-500"
            icon={<OrderIcon additionalStyles="w-5 h-5 text-white" />}
          />
          <DashboardCard
            description="Amount"
            type="Pieces"
            value={`$${pieces}`}
            additionalStyles="bg-[brown]"
            icon={<TotalPriceIcon additionalStyles="text-white" />}
          />
        </div>
        <div className="mt-10 bg-white rounded-lg p-4  shadow-lg shadow-gray-700">
          <h2 className="text-center font-medium text-base">Latest 3 orders</h2>
          <div className="overflow-auto ">
            <table className="min-w-[720px] md:w-full mt-4 table-fixed">
              <thead>
                <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
                  <th className="font-medium mr-2">CUSTOMER</th>
                  <th className="font-medium mr-2">ORDER DATE</th>
                  <th className="font-medium mr-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {orderData.length === 0 && (
                  <div className="text-center">No data available</div>
                )}
                {orderData.length !== 0 &&
                  orderData.slice(-3).map((item) => {
                    return (
                      <tr
                        key={item.order_id}
                        className="text-center text-[14px]"
                      >
                        <TableField data={item.customer_name} />
                        <TableField data={item.order_date} />
                        <td className="border-2 p-1">
                          <span
                            className={`${
                              item.status === "Delivered" && "bg-green-300"
                            } ${item.status === "Return" && "bg-red-300"}
                  ${item.status === "Pending" && "bg-yellow-300"}
                  ${item.status === "In progress" && "bg-blue-300"}
                   p-1 pr-2 pl-2 rounded-lg text-[12px] font-medium `}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-end">
            <PrimaryButton
              title="More orders"
              onClick={handleMoreOrdersClick}
            />
          </div>
        </div>
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Dashboard;
