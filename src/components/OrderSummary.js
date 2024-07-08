import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ items }) => (
  <div className="order-summary">
    <h2>In Your Cart</h2>
    <div className="summary-details">
      <p>
        Sub-total: $
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
      <p>Shipping: Free</p>
      <p>Add Promo Code</p>
      <h3>
        Total: $
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
      <p>Delivery is on Wednesday, 10th July, 2024</p>
    </div>
    {items.map((item) => (
      <div key={item.id} className="summary-item">
        <img src={item.image} alt={item.name} />
        <div className="summary-item-details">
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      </div>
    ))}
  </div>
);

export default OrderSummary;
