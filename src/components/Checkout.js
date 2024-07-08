import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeliveryOptions from "../components/DeliveryOptions";
import DeliveryAddress from "../components/DeliveryAddress";
import PaymentMethod from "../components/PaymentMethod";
import CardDetails from "../components/CardDetails";
import OrderSummary from "../components/OrderSummary";
import "./Checkout.css";

const items = [
  {
    id: 1,
    name: "Gloria Queen Gown",
    description: "TRENDING",
    price: 70,
    quantity: 1,
    color: "Black",
    size: "UK 10",
    image: "url1",
  },
  {
    id: 2,
    name: "Gloria Zeni Sleeveless",
    description: "Black",
    price: 90,
    quantity: 2,
    color: "Black",
    size: "UK 12",
    image: "url2",
  },
];

const Checkout = () => (
  <div className="checkout">
    <Header />
    <div className="main-content">
      <div className="checkout-left">
        <DeliveryOptions />
        <DeliveryAddress />
        <PaymentMethod />
        <CardDetails />
        <button className="buy-now-button">Buy Now</button>
      </div>
      <OrderSummary items={items} />
    </div>
    <Footer />
  </div>
);

export default Checkout;
