import React from "react";

import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotal } from "../redux/Cart/cart.selector";
import CheckoutItem from "./checkout-item";

const CheckoutPage = ({ items, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {items.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total">
      Total: ${total}
      <span></span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
