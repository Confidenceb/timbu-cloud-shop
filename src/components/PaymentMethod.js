import React from "react";
import "./PaymentMethod.css";
import Button from "./Button";

const PaymentMethod = () => (
  <div className="payment-method">
    <h3>Payment</h3>
    <p>Select Payment Method</p>
    <div className="payment-methods">
      <Button className="payment-method-button active">
        Debit or Credit Card
      </Button>
      <Button className="payment-method-button">Paypal</Button>
    </div>
  </div>
);

export default PaymentMethod;
