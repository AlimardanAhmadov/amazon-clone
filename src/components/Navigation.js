import React from "react";
import classes from "../components/Navigation.module.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebaseConfig";


function Navigation() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          alt="Amazon Logo"
          className={classes.header__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className={classes.nav__search}>
        <input className={classes.nav__searchInput} type="text" />
        <SearchIcon className={classes.nav__searchIcon} />
      </div>

      <div className={classes.header__navLinks}>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className={classes.header__link}>
            <span className={classes.header__optionLineOne}>Hello Guest</span>
            <span className={classes.header__optionLineTwo}>{ user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className={classes.header__link}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>

        <div className={classes.header__link}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>

        <Link to="/checkout">
          <div className={classes.header__optionCart}>
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
