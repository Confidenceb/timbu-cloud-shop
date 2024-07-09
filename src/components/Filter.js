import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="filter-header">
        <h3>Sort by</h3>
        <span className="filter-toggle">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9201 15.55L13.4001 9.03001C12.6301 8.26001 11.3701 8.26001 10.6001 9.03001L4.08008 15.55"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="filter-section">
        <h4>Category</h4>
        <ul className="category-items">
          <li className="category-item">
            <label>All</label>
          </li>
          <li className="category-item">
            <label>Dresses</label>
          </li>
          <li className="category-item">
            <label>Trousers</label>
          </li>
          <li className="category-item">
            <label>Beach wear</label>
          </li>
          <li className="category-item">
            <label>Bags</label>
          </li>
          <li className="category-item">
            <label>Accessories</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Style</h4>
        <ul>
          <li>
            <input type="checkbox" value="Trending" id="trending" />
            <label htmlFor="trending">Trending</label>
          </li>
          <li>
            <input type="checkbox" value="Sales Discount" id="sales-discount" />
            <label htmlFor="sales-discount">Sales Discount</label>
          </li>
          <li>
            <input type="checkbox" value="On Demand" id="on-demand" />
            <label htmlFor="on-demand">On Demand</label>
          </li>
          <li>
            <input type="checkbox" value="Limited" id="limited" />
            <label htmlFor="limited">Limited</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Color</h4>
        <div className="color-options">
          <span
            className="color-option"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #000" }}
          >
            <i className="fas fa-check" style={{ color: "#000" }}></i>
          </span>
          <span
            className="color-option"
            style={{ backgroundColor: "#F44336" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#FFEB3B" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#8BC34A" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#00BCD4" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#9C27B0" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#E91E63" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#3F51B5" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#4CAF50" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#FF9800" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#795548" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#607D8B" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
