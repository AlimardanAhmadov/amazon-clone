import React from "react";
import classes from "./CheckoutProduct.module.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";


function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
      dispatch({
          type: 'REMOVE_FROM_CART',
          id: props.id,
          
      })
  };
  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProduct__image}
        src={props.image}
        alt={props.title}
      />

      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{props.title}</p>
        <p className={classes.checkoutProduct__price}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.checkoutProduct__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star__icon" />
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
