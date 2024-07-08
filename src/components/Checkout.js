import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeliveryOptions from "../components/DeliveryOptions";
import DeliveryAddress from "../components/DeliveryAddress";
import PaymentMethod from "../components/PaymentMethod";
import CardDetails from "../components/CardDetails";
import OrderSummary from "../components/OrderSummary";
import "./Checkout.css";
import Button from "./Button";

const items = [
  {
    id: 1,
    name: "Gloria Queen Gown",
    tag: "TRENDING",
    price: 70,
    quantity: 1,
    color: "Black",
    size: "UK 10",
    image:
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
  },
  {
    id: 2,
    name: "Gloria Zeni Sleeveless",
    description: "Black",
    price: 90,
    quantity: 2,
    color: "Black",
    size: "UK 12",
    image:
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
  },
];

const Checkout = () => (
  <div className="checkout">
    <Header />
    <h1 className="checkout-header">Checkout</h1>
    <div className="checkout-main-content">
      <div className="checkout-left">
        <DeliveryOptions />
        <DeliveryAddress />
        <PaymentMethod />
        <CardDetails />
        <Button className="buy-now-button">Buy Now</Button>
      </div>
      <OrderSummary items={items} />
    </div>
    <Footer />
  </div>
);

export default Checkout;
