import React from "react";
import classes from "./Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating
      },
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{props.title}</p>
        <p className={classes.product__price}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.product__rating}>
            {Array(props.rating)
            .fill()
            .map((_, i) => (
                <StarIcon className={classes.star__icon} />
            ))}
          <p>
          </p>
        </div>
      </div>
      <img src={props.image} alt={props.title} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
