import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import {toggleCartHidden} from '../redux/Actions/cart.actions';

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon hidden">
    <ShoppingBagIcon className="shopping-icon" onClick={toggleCartHidden}></ShoppingBagIcon>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => {
  itemCount: state.items.length;
};

export default connect(null, mapDispatchToProps)(CartIcon);
