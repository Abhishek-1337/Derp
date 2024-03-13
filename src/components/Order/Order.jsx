import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import MainBodyTopBar from "../../shared/components/MainBodyTopBar";
import OrderTable from "./OrderTable";
import MainBodyTopBarButton from "../../shared/components/MainBodyTopBarButton";
import Modal from "../../shared/components/Modal";
import OrderCreate from "./OrderCreate";

const Order = () => {
  const navigate = useNavigate();
  const [modalDialog, setModalDialog] = useState(false);
  const orderData = useSelector((state) => state.order.data);
  const productData = useSelector((state) => state.product.data);

  const homeNavigationHandler = () => {
    navigate("/");
  };

  const handleModalOnOpen = () => {
    setModalDialog(true);
  };

  const handleModalOnCancel = () => {
    setModalDialog(false);
  };
  return (
    <AppLayout>
      <MainBodyLayout>
        {modalDialog && (
          <Modal
            isOpen={modalDialog}
            onCancel={handleModalOnCancel}
            title="Create order"
            data={
              <OrderCreate
                productData={productData}
                onCancel={handleModalOnCancel}
              />
            }
          />
        )}
        <div className="flex justify-between">
          <MainBodyTopBar
            heading=" Manage Orders"
            section="&gt; Orders"
            homeNavigationHandler={homeNavigationHandler}
          />
          <MainBodyTopBarButton
            title="Create order"
            modalOpenHandler={handleModalOnOpen}
          />
        </div>
        <OrderTable orderData={orderData} productData={productData} />
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Order;
