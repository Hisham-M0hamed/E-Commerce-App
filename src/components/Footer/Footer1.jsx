import React from "react";
import "./footer.css";
const Footer1 = () => {
  return (
    <div className="all-footer">
      <div className="footer">
        <div className="footer-rank">
          <h3>Exclusive</h3>

          <h6>Subscribe</h6>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="footer-rank">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-rank">
          <h3>Account</h3>
          <p>My Account</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Login & Register</p>
        </div>
        <div className="footer-rank">
          <h3>Help & Support</h3>
          <p>FAQ</p>
          <p>Shipping Policy</p>
          <p>Payment Methods</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>�� 2022 All rights reserved | Designed by XYZ</p>
      </div>
    </div>
  );
};

export default Footer1;
