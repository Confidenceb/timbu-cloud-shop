import React from "react";
import Product from "./Product";
import "./RecommendedProducts.css";

const RecommendedProducts = ({ products }) => (
  <div className="recommended-products">
    <h2>You Might Also Like</h2>
    <div className="product-grid">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default RecommendedProducts;
