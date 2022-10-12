import { React, useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";

import classes from "./Payment.module.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../components/CheckoutProduct";
import axios from "../axios";

export default function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(null);

  const [disabled, setDisable] = useState(true);
  const [processing, setProcessing] = useState(null);

  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db
          .collection("users")
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className={classes.payment}>
      <div className={classes.payment__container}>
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>

        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angles, CA</p>
          </div>
        </div>
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={classes.payment__items}>
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
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={classes.payment__details}>
            <form onClick={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className={classes.payment__priceContainer}>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
