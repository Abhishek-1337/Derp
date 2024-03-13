import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const productData = useSelector((state) => state.product.data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product data={productData} />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
