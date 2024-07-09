import React from "react";
import "./Footer.css";

function Footer({ takeNewsletter = false }) {
  return (
    <>
      {takeNewsletter && (
        <div className="newsletter">
          <p>Stay updated by subscribing to our newsletter</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Input your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="/">Men's Wear</a>
              </li>
              <li>
                <a href="/">Women's Wear</a>
              </li>
              <li>
                <a href="/">Unisex</a>
              </li>
              <li>
                <a href="/">Kid's Wear</a>
              </li>
              <li>
                <a href="/">Shoes</a>
              </li>
              <li>
                <a href="/">Bags</a>
              </li>
              <li>
                <a href="/">Accessories</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Giora</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Corporate News</a>
              </li>
              <li>
                <a href="/">Investors</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Shipping & Delivery</a>
              </li>
              <li>
                <a href="/">Discount</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>FAQ</h4>
            <ul>
              <li>
                <a href="/">Return Policy</a>
              </li>
              <li>
                <a href="/">Referral Policy</a>
              </li>
              <li>
                <a href="/">Cookie Settings</a>
              </li>
              <li>
                <a href="/">Franchise Policy</a>
              </li>
              <li>
                <a href="/">Student Discount</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Giora, Inc.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
