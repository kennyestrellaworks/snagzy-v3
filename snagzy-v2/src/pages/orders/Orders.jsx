import { useData } from "../../context/DataContext";

export const Orders = () => {
  const { getAllOrdersByProductId } = useData();
  const orders = getAllOrdersByProductId("product66e939020051dc2c4fa6532b");
  console.log("orders", orders);

  return <div>Orders</div>;
};
