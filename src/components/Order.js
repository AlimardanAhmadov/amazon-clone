import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import classes from './Order.module.css';
import moment from 'moment';
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className={classes.order__item}>
      <h3>Order</h3>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className={classes.order__id}>
      </p>
      <small>{order.id}</small>
      {order.data.basket?.map(item => (
        <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>Order Total:{value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Order;