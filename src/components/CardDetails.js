import React from "react";
import "./CardDetails.css";

const CardDetails = () => (
  <div className="card-details">
    <h3>Card Details</h3>
    <form>
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="Name On Card" />
      <div className="form-group">
        <input type="text" placeholder="MM/YY" />
        <input type="text" placeholder="CVV" />
      </div>
      <div className="save-card">
        <input type="checkbox" id="save-card" />
        <label htmlFor="save-card">Save card details for later</label>
      </div>
    </form>
  </div>
);

export default CardDetails;
