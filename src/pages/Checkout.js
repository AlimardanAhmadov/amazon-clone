import React from "react";
import classes from "../pages/Checkout.module.css";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

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
            <h6>Hello, {user ? user.email : 'Guest'}</h6>
              Your Shopping Cart
          </h2>
          <div className={classes.checkoutList}>
            {basket.map(item => (
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
      </div>
      <div className={classes.checkout__right}>
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
