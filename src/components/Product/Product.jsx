import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import ProductTable from "./ProductTable";

const Product = () => {
  return (
    <AppLayout>
      <MainBodyLayout>
        <div>
          <h2 className="text-lg font-medium tracking-wide">
            Manage Product & Services
          </h2>
          <p className="text-xs tracking-tight font-normal">
            <span className="text-blue-700">Dashboard</span> &gt; Product &
            Services
          </p>
        </div>

        <ProductTable />
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Product;
