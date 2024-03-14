import TableTop from "../../shared/components/TableTop";
import ProductTableMain from "./Main/ProductTableMain";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const productData = useSelector((state) => state.product.data);
  const [selectedValue, setSelectedValue] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const searchFilterOnData = (value) => {
    if (value !== "") {
      const results = productData.filter((item) => {
        return (
          item.product_name.toLowerCase().includes(value?.toLowerCase()) ||
          item.category.toLowerCase().includes(value?.toLowerCase())
        );
      });
      setSearchedQuery(value);
      setSearchResults(results);
    } else {
      setSearchedQuery("");
      setSearchResults([]);
    }
  };
  return (
    <div className="overflow-auto mt-4 bg-white rounded-lg p-2  shadow-lg shadow-gray-700">
      <TableTop
        handleChange={handleChange}
        selectedValue={selectedValue}
        searchFilterOnData={searchFilterOnData}
      />
      <ProductTableMain
        pageSize={+selectedValue}
        data={
          searchResults.length === 0
            ? searchedQuery === ""
              ? productData
              : []
            : searchResults
        }
      />
    </div>
  );
};

export default ProductTable;
