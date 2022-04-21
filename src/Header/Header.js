import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "./logo_wheat.png";
import "./header.styles.scss";
import CartIcon from "../Cart/cart-icon";
import CartDropdown from "../Cart/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/User/user.selector";
import { selectCartHidden } from "../redux/Cart/cart.selector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} className="logo" alt="icon"></img>
    </Link>
    <div className="greeting">Hello {currentUser ? currentUser : "User"}</div>
    <div className="menu-container">
      <Link to="/" className="option">
        Home
      </Link>
      <Link to="/shop" className="option">
        Shop
      </Link>
      {currentUser ? (
        <Link to="/signout" className="option">
          Sign Out
        </Link>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
      {currentUser ? (
        ""
      ) : (
        <Link to="/signup" className="option">
          Sign Up
        </Link>
      )}
        <CartIcon></CartIcon>
    </div>
    {
      hidden? null : <CartDropdown></CartDropdown>
    }
    
  </div>
);

const mapStatetoProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps, null)(Header);
