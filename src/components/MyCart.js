import React from "react";
import Button from "./Button";

function MyCart({ items, className = "", qtyIncrease = true, btnRmv = true }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={`cart-item ${className}`}>
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
                {qtyIncrease ? (
                  <span>
                    {" "}
                    <button>-</button>
                    {item.quantity}
                    <button>+</button>
                  </span>
                ) : (
                  <span>{item.quantity}</span>
                )}
              </span>
            </div>
            {btnRmv && <Button className={"remove-button"}>Remove</Button>}
            {/* <button className="remove-button">Remove</button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default MyCart;
