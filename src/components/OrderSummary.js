import React from "react";
import "./OrderSummary.css";
import MyCart from "./MyCart";

const OrderSummary = ({ items }) => (
  <div className="order-summary">
    <div className="order-summary-header">
      <h2 className="order-header">In Your Cart</h2>
    </div>
    <div className="summary-details">
      <p className="detail">
        <span>Sub-total</span>{" "}
        <span>
          ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </span>{" "}
      </p>
      <p className="detail">
        <span>Shipping</span> <span>Free</span>
      </p>
      <p className="detail">
        <span>Add Promo Code</span>
        <span>--</span>
      </p>
      <p className="detail">
        <h3>Total</h3>
        <h3>
          ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h3>
      </p>
      <p>Delivery is on Wednesday, 10th July, 2024</p>
    </div>
    <MyCart
      items={items}
      qtyIncrease={false}
      className="hello-world"
      btnRmv={false}
    />
  </div>
);

export default OrderSummary;
