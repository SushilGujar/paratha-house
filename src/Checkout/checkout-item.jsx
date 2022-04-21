import React from "react";
import "./checkout.item.styles.scss";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../redux/Cart/cart.actions";

const checkoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>-</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>+</div>
      </span>
      <span className="price">{price * quantity}</span>
      <span className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem : (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(checkoutItem);
