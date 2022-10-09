import React from "react";
import classes from "../components/Subtotal.module.css";
import CurrencyFormat from "react-currency-format";


function Subtotal() {
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <span className={classes.subtotal__gift}>
              <input type="checkbox" />
              This order contains a gift
            </span>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
