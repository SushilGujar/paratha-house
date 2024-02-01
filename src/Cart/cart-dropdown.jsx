import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../redux/Cart/cart.actions";
import CustomButton from "../SignIn/CustomButton";
import "./cart-dropdown.styles.scss";
import CartItem from "./cart-item";

const CartDropdown = ({items, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        items.length ? (
          items.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))) : (
            <span className="empty-message">Your cart is empty.</span>
          )           
      }
    </div>
    <CustomButton onClick={() => {
        history.push('./checkout');
        //dispatch(toggleCartHidden());
      }}>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
