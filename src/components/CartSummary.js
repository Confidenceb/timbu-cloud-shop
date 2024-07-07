import React from "react";
import "./CartSummary.css";

const CartSummary = ({ total }) => (
  <div className="cart-summary">
    <h2 className="summary-header">Cart Summary</h2>
    <p>
      <span>Sub-total</span> <span>${total}</span>{" "}
    </p>
    <p>
      <span>Shipping</span> <span>Free</span>
    </p>
    <p>
      <span>Add Promo Code</span>
      <span>--</span>
    </p>
    <h3>
      <span>Total</span>
      <span>${total}</span>
    </h3>
    <Button className="checkout-button">Check Out</Button>
    <Button className="paypal-button">
      <svg
        width="50"
        height="22"
        viewBox="0 0 50 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_282_975)">
          <path
            d="M6.38001 3.38043H2.55801C2.31301 3.38043 2.06801 3.65543 2.01901 3.99918L0.500006 17.7492C0.451006 18.0242 0.598006 18.2304 0.794006 18.2304H2.60701C2.85201 18.2304 3.09701 17.9554 3.14601 17.6117L3.53801 13.8992C3.58701 13.5554 3.78301 13.2804 4.07701 13.2804H5.30201C7.80101 13.2804 9.27101 11.5617 9.66301 8.19293C9.81001 6.74918 9.66301 5.58043 9.17301 4.75543C8.63401 3.86168 7.65401 3.38043 6.38001 3.38043ZM6.82101 8.39918C6.62501 10.3242 5.54701 10.3242 4.56701 10.3242H3.97901L4.37101 6.74918C4.37101 6.54293 4.51801 6.40543 4.66501 6.40543H4.91001C5.59601 6.40543 6.23301 6.40543 6.57601 6.95543C6.82101 7.23043 6.91901 7.71168 6.82101 8.39918Z"
            fill="#003087"
          />
          <path
            d="M17.748 8.33044H15.935C15.788 8.33044 15.641 8.46794 15.641 8.67419L15.543 9.36169L15.396 9.08669C15.004 8.26169 14.122 7.98669 13.24 7.98669C11.231 7.98669 9.516 10.1179 9.173 13.1429C8.977 14.6554 9.222 16.0992 9.859 17.0617C10.398 17.9554 11.231 18.3679 12.162 18.3679C13.779 18.3679 14.71 16.9242 14.71 16.9242L14.612 17.6117C14.563 17.8867 14.71 18.1617 14.906 18.1617H16.572C16.817 18.1617 17.062 17.8867 17.111 17.5429L18.091 8.74294C18.14 8.60544 17.944 8.33044 17.748 8.33044ZM15.249 13.2804C15.053 14.7242 14.269 15.7554 13.191 15.7554C12.652 15.7554 12.26 15.5492 11.966 15.0679C11.672 14.5867 11.574 13.9679 11.672 13.2804C11.819 11.8367 12.701 10.8054 13.73 10.8054C14.269 10.8054 14.661 11.0804 14.955 11.4929C15.2 11.9742 15.298 12.5929 15.249 13.2804Z"
            fill="#003087"
          />
          <path
            d="M27.499 8.33044H25.686C25.49 8.33044 25.343 8.46794 25.245 8.67419L22.697 13.8992L21.619 8.88044C21.57 8.53669 21.325 8.33044 21.129 8.33044H19.316C19.12 8.33044 18.924 8.60544 19.022 8.94919L21.031 17.2679L19.12 20.9804C18.973 21.2554 19.12 21.6679 19.365 21.6679H21.178C21.374 21.6679 21.521 21.5304 21.619 21.3242L27.744 8.94919C27.891 8.74294 27.744 8.33044 27.499 8.33044Z"
            fill="#003087"
          />
          <path
            d="M33.575 3.38043H29.753C29.508 3.38043 29.263 3.65543 29.214 3.99918L27.695 17.6804C27.646 17.9554 27.793 18.1617 27.989 18.1617H29.949C30.145 18.1617 30.292 17.9554 30.292 17.7492L30.733 13.8304C30.782 13.4867 30.978 13.2117 31.272 13.2117H32.497C34.996 13.2117 36.466 11.4929 36.858 8.12418C37.005 6.68043 36.858 5.51168 36.368 4.68668C35.78 3.86168 34.849 3.38043 33.575 3.38043ZM34.016 8.39918C33.82 10.3242 32.742 10.3242 31.762 10.3242H31.174L31.566 6.74918C31.566 6.54293 31.713 6.40543 31.86 6.40543H32.105C32.791 6.40543 33.428 6.40543 33.771 6.95543C34.016 7.23043 34.065 7.71168 34.016 8.39918Z"
            fill="#009CDE"
          />
          <path
            d="M44.943 8.33044H43.13C42.983 8.33044 42.836 8.46794 42.836 8.67419L42.738 9.36169L42.591 9.08669C42.199 8.26169 41.317 7.98669 40.435 7.98669C38.426 7.98669 36.711 10.1179 36.368 13.1429C36.172 14.6554 36.417 16.0992 37.054 17.0617C37.593 17.9554 38.426 18.3679 39.357 18.3679C40.974 18.3679 41.905 16.9242 41.905 16.9242L41.807 17.6117C41.758 17.8867 41.905 18.1617 42.101 18.1617H43.767C44.012 18.1617 44.257 17.8867 44.306 17.5429L45.286 8.74294C45.286 8.60544 45.139 8.33044 44.943 8.33044ZM42.395 13.2804C42.199 14.7242 41.415 15.7554 40.337 15.7554C39.798 15.7554 39.406 15.5492 39.112 15.0679C38.818 14.5867 38.72 13.9679 38.818 13.2804C38.965 11.8367 39.847 10.8054 40.876 10.8054C41.415 10.8054 41.807 11.0804 42.101 11.4929C42.395 11.9742 42.493 12.5929 42.395 13.2804Z"
            fill="#009CDE"
          />
          <path
            d="M47.099 3.72418L45.531 17.6804C45.482 17.9554 45.629 18.1617 45.825 18.1617H47.393C47.638 18.1617 47.883 17.8867 47.932 17.5429L49.5 3.86168C49.549 3.58668 49.402 3.38043 49.206 3.38043H47.442C47.246 3.38043 47.148 3.51793 47.099 3.72418Z"
            fill="#009CDE"
          />
        </g>
        <defs>
          <clipPath id="clip0_282_975">
            <rect
              width="49"
              height="22"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
    <div className="secure-payments">
      <span>Secure Payments:</span>
      <img src="path-to-secure-payment-icons.png" alt="Secure Payments" />
    </div>
  </div>
);

export default CartSummary;

function Button({ children, className }) {
  return <button className={`button ${className}`}>{children}</button>;
}
