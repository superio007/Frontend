import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css"; // Import CSS for styling
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Branding & Social */}
        <div className="footer-branding">
          <h1 className="footer-logo">boco</h1>
          <p className="footer-description">
            We are driven by quality and we’re 0 bullshit. If you think the same
            way, we love a good chat.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingRight: "0", paddingLeft: "0" }}
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: "0" }}
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right Section - Products */}
        <div className="footer-links">
          <h3 className="footer-title">Products</h3>
          <ul className="footer-list">
            <li>
              <NavLink to={"/boco-shopify-store-build"}>
                Shopify Store Build
              </NavLink>
            </li>
            <li>
              <NavLink to={"/custom-shopify-landing-page"}>
                Custom Landing Pages
              </NavLink>
            </li>
            <li>
              <NavLink to={"/case-studies"}>Case Studies</NavLink>
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
