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
    console.log(order.delivery_date);
    console.log(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
    if (
      order.delivery_date === currDate &&
      new Date(order.delivery_date) > new Date() &&
      order.status !== "Delivered"
    ) {
      orderDeliveries.push(order);
    }
  });
  return (
    <>
      <OrderDetailOnDay day={day} orderDeliveries={orderDeliveries} />
    </>
  );
};

export default Day;
