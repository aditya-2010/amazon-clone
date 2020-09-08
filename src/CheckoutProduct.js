import React from "react";
import "./Checkout.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span key={Math.random()} role="star" aria-hidden="true">
                ⭐
              </span>
            ))}
        </div>

        <button>Remove to Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;