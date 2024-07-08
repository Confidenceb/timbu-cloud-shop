import React from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = () => (
  <div className="delivery-address">
    <h3>Delivery Address</h3>
    <form>
      <div className="form-group">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
      </div>
      <input type="text" placeholder="Home Address" />
      <div className="form-group">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Country" />
      </div>
    </form>
  </div>
);

export default DeliveryAddress;
