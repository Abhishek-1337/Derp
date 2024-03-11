import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";

function App() {
  const productData = useSelector((state) => state.product.data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product data={productData} />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
