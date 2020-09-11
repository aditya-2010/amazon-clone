import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { CSSTransitionGroup } from "react-transition-group";
// import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__header">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        <div className="checkout__subtotal">
          {basket.length >= 0 && <Subtotal />}
        </div>
      </div>
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
          {/* <hr /> */}
          {/* all products in basket */}
          <div className="checkout__product">
            <CSSTransitionGroup
              transitionName="checkout__productList"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {basket?.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </CSSTransitionGroup>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
