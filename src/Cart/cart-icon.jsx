import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import {toggleCartHidden} from '../redux/Cart/cart.actions';
import { selectCartItemsCount } from "../redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon hidden">
    <ShoppingBagIcon className="shopping-icon" onClick={toggleCartHidden}></ShoppingBagIcon>
    <span className="item-count">{ itemCount }</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
