import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import MainBodyTopBar from "../../shared/components/MainBodyTopBar";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

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
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Order;
