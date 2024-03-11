import { useState } from "react";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import ProductTable from "./ProductTable";
import Modal from "../../shared/components/Modal";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/slice/product";

const Product = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const dispatchAddDataProduct = (obj) => {
    dispatch(productActions.addData(obj));
  };
  const modalOpenHandler = () => {
    setModalOpen(true);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
  };
  return (
    <AppLayout>
      <MainBodyLayout>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-medium tracking-wide">
              Manage Product & Services
            </h2>
            <p className="text-xs tracking-tight font-normal">
              <span className="text-blue-700">Dashboard</span> &gt; Product &
              Services
            </p>
          </div>
          <button
            className="p-3 pt-1 pb-1 max-h-[40px] bg-blue-700 text-white rounded-xl text-xs font-medium shadow-white shadow-sm hover:scale-105 transition-all"
            onClick={modalOpenHandler}
          >
            Create Product
          </button>
          <Modal
            isOpen={modalOpen}
            onCancel={modalCloseHandler}
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
