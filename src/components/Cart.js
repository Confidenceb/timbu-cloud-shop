import React from "react";
import "./Cart.css";
import MyCart from "./MyCart";

const Cart = ({ items }) => (
  <div className="cart">
    <div className="hello">
      <h2>MY CART</h2>
      <p className="subtotal">
        Subtotal $
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
      <p className="shopping-bag">Shopping Bag</p>
      <span className="items-number">{items.length} items</span>
    </div>
    <MyCart items={items} />
  </div>
);

export default Cart;
