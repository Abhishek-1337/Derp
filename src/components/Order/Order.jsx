import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import MainBodyTopBar from "../../shared/components/MainBodyTopBar";
import { useNavigate } from "react-router-dom";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";

const Order = () => {
  const navigate = useNavigate();
  const order = useSelector((state) => state.order.data);
  const homeNavigationHandler = () => {
    navigate("/");
  };
  return (
    <AppLayout>
      <MainBodyLayout>
        <MainBodyTopBar
          heading=" Manage Orders"
          section="&gt; Orders"
          homeNavigationHandler={homeNavigationHandler}
        />
        <OrderTable data={order} />
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Order;
