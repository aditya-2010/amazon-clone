import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Amazon Basket is empty</h2>
          <p>
            You have no items in your Basket. To buy one or more items, click on
            "Add To Basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* all products in basket */}
          <div className="checkout__product">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
