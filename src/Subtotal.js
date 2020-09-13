import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <h3>Subtotal</h3>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {!user && (
        <button disabled={true} className="subtotal__disabledButton">
          Sign in to Proceed
        </button>
      )}
      {user && basket && (
        <button
          className="subtotal__button"
          onClick={(e) => history.push("/payment")}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
