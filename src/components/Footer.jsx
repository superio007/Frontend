import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Branding & Social */}
        <div className="footer-branding">
          <h2 className="footer-logo">boco</h2>
          <p className="footer-description">
            We are driven by quality and we’re 0 bullshit. If you think the same
            way, we love a good chat.
          </p>
          <div className="footer-social">
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>

        {/* Right Section - Products */}
        <div className="footer-links">
          <h3 className="footer-title">Products</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Shopify Store Build</a>
            </li>
            <li>
              <a href="#">Custom Landing Pages</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <hr className="footer-divider" />
      <p className="footer-copyright">
        © Copyright, BOCO {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
