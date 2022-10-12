import React from "react";
import classes from "../components/Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import  { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from 'react-router';


function Subtotal() {
  let navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (({basket.length}) items): <strong>{value}</strong>
            </p>
            <span className={classes.subtotal__gift}>
              <input type="checkbox" />
              This order contains a gift
            </span>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate("/payment", { replace: true })}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
