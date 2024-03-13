import { useSelector } from "react-redux";
import OrderDetailOnDay from "./OrderDetailOnDay";

const Day = ({ day, date }) => {
  const orderData = useSelector((state) => state.order.data);
  const currDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    day
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const orderDeliveries = [];
  orderData.forEach((order) => {
    if (order.delivery_date === currDate) {
      orderDeliveries.push(order);
    }
  });
  console.log(orderDeliveries);
  return (
    <>
      <OrderDetailOnDay day={day} orderDeliveries={orderDeliveries} />
    </>
  );
};

export default Day;