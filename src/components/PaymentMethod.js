import React from "react";
import "./PaymentMethod.css";
import Button from "./Button";

const PaymentMethod = () => (
  <div className="payment-method">
    <h3 className="payment-method-header">Payment</h3>
    <p className="payment-method-secondary">Select Payment Method</p>
    <div className="payment-methods">
      <Button className="payment-method-btn active">
        <div className="btn-element">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.51 2.83002H8.49C6 2.83002 5.45 4.07002 5.13 5.59002L4 11H20L18.87 5.59002C18.55 4.07002 18 2.83002 15.51 2.83002Z"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.43998C7.99998 19 7.78998 19.62 7.53998 20.37L7.33998 20.97C7.14998 21.54 6.99998 22 5.91998 22H4.03998C2.83998 22 1.89998 20.99 2.00998 19.82L2.56998 13.73C2.70998 12.23 2.99998 11 5.61998 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 8H3"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 8H20"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 3V5"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 5H13.5"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 15H9"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 15H18"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Debit or Credit Card</span>
        </div>
      </Button>
      <Button className="payment-method-btn">
        <div className="btn-element">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
                stroke="#10413F"
                stroke-width="1.5"
              />
              <path
                d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                stroke="#10413F"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span>Paypal</span>
        </div>
      </Button>
    </div>
  </div>
);

export default PaymentMethod;
