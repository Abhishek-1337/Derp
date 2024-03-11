import ProductTableMain from "./Main/ProductTableMain";
import ProductTableTop from "./Top/ProductTableTop";
import { useState } from "react";

const ProductTable = () => {
  const [selectedValue, setSelectedValue] = useState(10);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="overflow-auto mt-4 bg-white rounded-lg p-2  shadow-lg shadow-gray-700">
      <ProductTableTop
        handleChange={handleChange}
        selectedValue={selectedValue}
      />
      <ProductTableMain pageSize={selectedValue} />
    </div>
  );
};

export default ProductTable;
