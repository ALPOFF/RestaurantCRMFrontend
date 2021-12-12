import { useEffect, useState } from "react";
import { mainAPI } from "../../common/api/api";
import { Redirect } from "react-router-dom";
import ChildOrderComponent from "./ChildOrderComponent/ChildOrderComponent";
import "./OrdersComponent.css";

const OrdersComponent = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    mainAPI.getOrders().then((data) => {
      console.log(data);
      setOrders(data);
    });
  }, []);

  if (localStorage.getItem("isAuth") == null) return <Redirect to={"/auth/"} />;

  return (
    <div className="order-container">
      Забронированные столики:
      <div className="order-child-container">
        {orders.map((el) => (
          <ChildOrderComponent
            key={el.claim_id}
            tableNumber={el.table_number}
            timestamp={el.timestamp}
          /> //Сюда отдавать данные
        ))}
      </div>
    </div>
  );
};

export default OrdersComponent;
