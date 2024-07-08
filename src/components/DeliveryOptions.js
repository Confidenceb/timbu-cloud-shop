import React from "react";
import "./DeliveryOptions.css";

const DeliveryOptions = () => (
  <div className="delivery-options">
    <h3>How do you want your delivery?</h3>
    <div className="delivery-methods">
      <button className="delivery-method active">Delivery</button>
      <button className="delivery-method">In-Store Pickup</button>
    </div>
  </div>
);

export default DeliveryOptions;
