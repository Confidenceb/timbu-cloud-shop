import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => (
  <div className="payment-method">
    <h3>Payment</h3>
    <p>Select Payment Method</p>
    <div className="payment-methods">
      <button className="payment-method-button active">
        Debit or Credit Card
      </button>
      <button className="payment-method-button">Paypal</button>
    </div>
  </div>
);

export default PaymentMethod;
