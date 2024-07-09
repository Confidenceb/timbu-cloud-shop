import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [cartIconHover, setCartIconHover] = useState(false);
  const [likeIconHover, setLikeIconHover] = useState(false);

  return (
    <div className="product">
      <Link to="/Cart" className="link">
        <div
          className="product-image-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={hovered ? images[1] : images[0]}
            alt={name}
            className="product-image"
          />
          <div
            className="like-icon"
            onMouseEnter={() => setLikeIconHover(!likeIconHover)}
            onMouseLeave={() => setLikeIconHover(!likeIconHover)}
            onClick={() => setLikeIconHover(!likeIconHover)}
          >
            {likeIconHover ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#FEFEFE" />
                <path
                  d="M16 2.66666C8.63996 2.66666 2.66663 8.63999 2.66663 16C2.66663 23.36 8.63996 29.3333 16 29.3333C23.36 29.3333 29.3333 23.36 29.3333 16C29.3333 8.63999 23.36 2.66666 16 2.66666ZM16.44 22.6667C16.2 22.7467 15.7866 22.7467 15.5466 22.6667C13.4666 21.96 8.79996 18.9867 8.79996 13.9467C8.79996 11.72 10.5866 9.91999 12.8 9.91999C14.1066 9.91999 15.2666 10.5467 16 11.5333C16.72 10.56 17.8933 9.91999 19.2 9.91999C21.4133 9.91999 23.2 11.72 23.2 13.9467C23.2 18.9867 18.5333 21.96 16.44 22.6667Z"
                  fill="#10413F"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#FEFEFE" />
                <path
                  d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63616 2.66666 2.66663 8.63619 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z"
                  stroke="#10413F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.44 23.2667C16.2 23.3467 15.7867 23.3467 15.5467 23.2667C13.4667 22.56 8.80005 19.5867 8.80005 14.5467C8.80005 12.32 10.5867 10.52 12.8 10.52C14.1067 10.52 15.2667 11.1467 16 12.1333C16.72 11.16 17.8934 10.52 19.2 10.52C21.4134 10.52 23.2 12.32 23.2 14.5467C23.2 19.5867 18.5334 22.56 16.44 23.2667Z"
                  stroke="#10413F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          <Link to="/cart" className="link">
            <div
              className="cart-icon"
              onMouseEnter={() => setCartIconHover(!cartIconHover)}
              onMouseLeave={() => setCartIconHover(!cartIconHover)}
            >
              {cartIconHover ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#1A1A1A" />
                  <path
                    d="M19.8958 25.625C20.7817 25.625 21.5 24.9068 21.5 24.0208C21.5 23.1349 20.7817 22.4167 19.8958 22.4167C19.0098 22.4167 18.2916 23.1349 18.2916 24.0208C18.2916 24.9068 19.0098 25.625 19.8958 25.625Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M12.5625 25.625C13.4485 25.625 14.1667 24.9068 14.1667 24.0208C14.1667 23.1349 13.4485 22.4167 12.5625 22.4167C11.6766 22.4167 10.9584 23.1349 10.9584 24.0208C10.9584 24.9068 11.6766 25.625 12.5625 25.625Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M9.43671 8.61168L9.25337 10.8575C9.21671 11.2883 9.55587 11.6458 9.98671 11.6458H24.0209C24.4059 11.6458 24.7267 11.3525 24.7542 10.9675C24.8734 9.34501 23.6359 8.02501 22.0134 8.02501H10.7475C10.6559 7.62168 10.4725 7.23668 10.1884 6.91584C9.73004 6.43001 9.08837 6.14584 8.42837 6.14584H6.83337C6.45754 6.14584 6.14587 6.45751 6.14587 6.83334C6.14587 7.20918 6.45754 7.52084 6.83337 7.52084H8.42837C8.71254 7.52084 8.97837 7.64001 9.17087 7.84168C9.36337 8.05251 9.45504 8.32751 9.43671 8.61168Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M23.8008 13.0208H9.73917C9.35417 13.0208 9.04251 13.3142 9.00584 13.69L8.67584 17.6775C8.54751 19.245 9.77584 20.5833 11.3433 20.5833H21.5367C22.9117 20.5833 24.1217 19.4558 24.2225 18.0808L24.525 13.8C24.5617 13.3783 24.2317 13.0208 23.8008 13.0208Z"
                    fill="#FEFEFE"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#FEFEFE" />
                  <rect
                    width="22"
                    height="22"
                    transform="translate(5 5)"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M6.8335 6.83331H8.4285C9.4185 6.83331 10.1977 7.68581 10.1152 8.66665L9.35433 17.7966C9.226 19.2908 10.4085 20.5741 11.9118 20.5741H21.6743C22.9943 20.5741 24.1493 19.4925 24.2502 18.1817L24.7452 11.3067C24.8552 9.78498 23.7002 8.54748 22.1693 8.54748H10.3352"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8958 25.1667C20.5287 25.1667 21.0417 24.6537 21.0417 24.0208C21.0417 23.388 20.5287 22.875 19.8958 22.875C19.263 22.875 18.75 23.388 18.75 24.0208C18.75 24.6537 19.263 25.1667 19.8958 25.1667Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5623 25.1667C13.1952 25.1667 13.7082 24.6537 13.7082 24.0208C13.7082 23.388 13.1952 22.875 12.5623 22.875C11.9295 22.875 11.4165 23.388 11.4165 24.0208C11.4165 24.6537 11.9295 25.1667 12.5623 25.1667Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.25 12.3333H24.25"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </Link>
        </div>
      </Link>
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
