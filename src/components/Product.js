import React, { useState } from "react";
import "./Product.css";

const Product = ({
  images,
  name,
  description,
  price,
  colors,
  limited = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="product"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        <img
          src={hovered ? images[1] : images[0]}
          alt={name}
          className="product-image"
        />
        <div className="like-icon" onClick={() => setLiked(!liked)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#FEFEFE" />
            <path
              d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z"
              stroke="#10413F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4398 23.2667C16.1998 23.3467 15.7865 23.3467 15.5465 23.2667C13.4665 22.56 8.7998 19.5867 8.7998 14.5467C8.7998 12.32 10.5865 10.52 12.7998 10.52C14.1065 10.52 15.2665 11.1467 15.9998 12.1333C16.7198 11.16 17.8931 10.52 19.1998 10.52C21.4131 10.52 23.1998 12.32 23.1998 14.5467C23.1998 19.5867 18.5331 22.56 16.4398 23.2667Z"
              stroke="#10413F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="product-details">
        {limited && <span className="limited">Limited</span>}
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="product-colors">
          {colors.map((color, index) => (
            <span
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
            >
              {color === "#000" && (
                <i className="fas fa-check" style={{ color: "#fff" }}></i>
              )}
            </span>
          ))}
        </div>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
