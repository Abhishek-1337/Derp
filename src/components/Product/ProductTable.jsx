import ProductTableMain from "./Main/ProductTableMain";
import ProductTableTop from "./Top/ProductTableTop";

const ProductTable = () => {
  return (
    <div className="overflow-auto mt-4 bg-white rounded-lg p-2  shadow-lg shadow-gray-700">
      <ProductTableTop />
      <ProductTableMain />
    </div>
  );
};

export default ProductTable;
