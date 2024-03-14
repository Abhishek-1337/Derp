import { useState } from "react";
import OrderTableMain from "./Main/OrderTableMain";
import TableTop from "../../shared/components/TableTop";

const OrderTable = ({ orderData, productData }) => {
  const [selectedValue, setSelectedValue] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const searchFilterOnData = (value) => {
    if (value !== "") {
      const results = orderData.filter((item) => {
        return item.customer_name.toLowerCase().includes(value?.toLowerCase());
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
      <OrderTableMain
        productData={productData}
        orderData={
          searchResults.length === 0
            ? searchedQuery === ""
              ? orderData
              : []
            : searchResults
        }
        pageSize={+selectedValue}
      />
    </div>
  );
};

export default OrderTable;
