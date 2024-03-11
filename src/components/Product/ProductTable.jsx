import ProductTableMain from "./Main/ProductTableMain";
import ProductTableTop from "./Top/ProductTableTop";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const [selectedValue, setSelectedValue] = useState(10);
  const productData = useSelector((state) => state.product.data);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const searchFilterOnData = (value) => {
    const results = productData.filter((item) =>
      item.product_name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="overflow-auto mt-4 bg-white rounded-lg p-2  shadow-lg shadow-gray-700">
      <ProductTableTop
        handleChange={handleChange}
        selectedValue={selectedValue}
        searchFilterOnData={searchFilterOnData}
      />
      <ProductTableMain
        pageSize={+selectedValue}
        data={searchResults.length === 0 ? productData : searchResults}
      />
    </div>
  );
};

export default ProductTable;
