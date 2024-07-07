import React from "react";
import "./Cart.css";

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
    {items.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="product-name">{item.name}</h3>
          <p className="tag">{item.tag}</p>
          <p className="price">${item.price}</p>
          <div className="details">
            <span>{item.color}</span>
            <span>{item.size}</span>
            <span className="quantity">
              <p>Qty:</p>
              <button>-</button>
              {item.quantity}
              <button>+</button>
            </span>
          </div>
          <button className="remove-button">Remove</button>
        </div>
      </div>
    ))}
  </div>
);

export default Cart;
