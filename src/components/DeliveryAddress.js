import React from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = () => (
  <div className="delivery-address">
    <h3>Delivery Address</h3>
    <form>
      <div className="form-group">
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="text" placeholder="Last Name" />
      </div>
      <div className="form-group">
        <input className="input" type="text" placeholder="Phone Number" />
        <input className="input" type="email" placeholder="Email Address" />
      </div>
      <input className="input" type="text" placeholder="Home Address" />
      <div className="form-group">
        <input className="input" type="text" placeholder="City" />
        <input className="input" type="text" placeholder="Country" />
      </div>
    </form>
  </div>
);

export default DeliveryAddress;
