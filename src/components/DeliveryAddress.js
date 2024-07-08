import React from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = () => (
  <div className="delivery-address">
    <h3>Delivery Address</h3>
    <form>
      <div className="form-group">
        <input
          className="delivery-input"
          type="text"
          placeholder="First Name"
        />
        <input className="delivery-input" type="text" placeholder="Last Name" />
      </div>
      <div className="form-group">
        <input
          className="delivery-input"
          type="text"
          placeholder="Phone Number"
        />
        <input
          className="delivery-input"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <iv className="form-group">
        <input
          className="delivery-input"
          type="text"
          placeholder="Home Address"
        />
      </iv>
      <div className="form-group">
        <input className="delivery-input" type="text" placeholder="City" />
        <input className="delivery-input" type="text" placeholder="Country" />
      </div>
    </form>
  </div>
);

export default DeliveryAddress;
