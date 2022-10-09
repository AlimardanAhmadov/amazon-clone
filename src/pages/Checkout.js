import React from "react";
import classes from "../pages/Checkout.module.css";
import Subtotal from "../components/Subtotal";


function Checkout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://cdn2.hubspot.net/hubfs/4567260/WelcomeBanner_Desktop._CB1545466266_.png"
          alt="Checkout Ad"
        />
        <div>
            <h2 className={classes.checkout__title}>
                Your Shopping Cart
            </h2>
        </div>
      </div>
      <div className={classes.checkout__right}>
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
