import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import Header from "./Header";

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>{orders ? "Your Orders" : "Your Orders appear here"}</h1>
      <div className="orders__order">
        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
