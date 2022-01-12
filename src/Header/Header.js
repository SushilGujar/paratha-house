import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../Auth/Firebase.Utils.js";

import Logo from "./logo_wheat.png";

import "./header.styles.scss";

const logout = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Sign-out successful");
      console.log(auth.currentUser);
    })
    .catch((error) => {
      console.error(error);
    });
};

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} className="logo" alt="icon"></img>
    </Link>
    <div className="greeting">
      Hello {currentUser ? currentUser : "User"}
    </div>
    <div className="menu-container">
      <Link to="/" className="option">
        Home
      </Link>
      <Link to="/shop" className="option">
        Shop
      </Link>
      {currentUser ? (
        <Link to="/signout" className="option" onClick={logout}>
          Sign Out
        </Link>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
      <Link to="/cart" className="option">
        Cart
      </Link>
    </div>
  </div>
);

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStatetoProps, null)(Header);
