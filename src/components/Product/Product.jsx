import { useState } from "react";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import ProductTable from "./ProductTable";
import Modal from "../../shared/components/Modal";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/slice/product";
import { useNavigate } from "react-router-dom";
import MainBodyTopBar from "../../shared/components/MainBodyTopBar";

const Product = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchAddDataProduct = (obj) => {
    dispatch(productActions.addData(obj));
  };
  const modalOpenHandler = () => {
    setModalOpen(true);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  const homeNavigationHandler = () => {
    navigate("/");
  };

  return (
    <AppLayout>
      <MainBodyLayout>
        <div className="flex justify-between">
          <MainBodyTopBar
            heading=" Manage Product & Services"
            section="&gt; Product & Services"
            homeNavigationHandler={homeNavigationHandler}
          />
          <button
            className="p-3 pt-1 pb-1 max-h-[50px] leading-none md:max-h-[40px] bg-blue-700 text-white rounded-xl text-[12px] md:text-xs font-medium shadow-white shadow-sm hover:scale-105 transition-all"
            onClick={modalOpenHandler}
          >
            Create Product
          </button>
          <Modal
            isOpen={modalOpen}
            onCancel={modalCloseHandler}
            title="Add Product"
            data={
              <ProductForm
                productDetails={{
                  name: "",
                  price: 0,
                  category: "",
                  quantity: 0,
                }}
                onCancel={modalCloseHandler}
                dispatchUpdateDataAction={dispatchAddDataProduct}
              />
            }
          />
        </div>

        <ProductTable />
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Product;
