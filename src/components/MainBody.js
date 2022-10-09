import React from "react";
import classes from "../components/MainBody.module.css";
import Product from "../Product";

function MainBody() {
  return (
    <div className={classes.main}>
      <div className={classes.home__container}>
        <img
          className={classes.home__banner}
          src="https://m.media-amazon.com/images/I/715Hmi-5iSL._SX3000_.jpg"
          alt="banner"
        />
        <div className={classes.home__row}>
          <Product
            id="1231221"
            title="The Night Watchman: A Novel"
            price={2.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41G+2heK13S._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            id="1231242"
            title="HP DeskJet 2755e Wireless Color All-in-One Printer with Bonus 6 Months Instant Ink with HP+"
            price={29.9}
            image="https://m.media-amazon.com/images/I/61iD0U2YwqL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="1232424"
            title="Razer DeathAdder V2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting - 8 Programmable Buttons - Rubberized Side Grips - Classic Black"
            price={29.9}
            image="https://m.media-amazon.com/images/I/61doJ9AKCPL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="9347583"
            title="Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair Mesh Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support, 400lb Capacity,Red"
            price={29.9}
            image="https://m.media-amazon.com/images/I/61gmXNWdZML._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="8989898"
            title="Pokémon Assorted Cards, 50 Pieces"
            price={29.9}
            image="https://m.media-amazon.com/images/I/71z1rgxpN4L._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="12321323"
            title="The lean startup"
            price={29.9}
            image="https://m.media-amazon.com/images/I/515bxDUV8uL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="12321323"
            title="The lean startup"
            price={29.9}
            image="https://m.media-amazon.com/images/I/515bxDUV8uL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
