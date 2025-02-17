import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "../css/header.css";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-header")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="mobile-header">
      {/* Left: Hamburger Menu */}
      <button
        className="menu-btn"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Center: Logo */}
      <NavLink to="/" className="logo">
        Boco
      </NavLink>

      {/* Right: Call-to-Action Button */}
      <Link
        to={"/talk-to-us"}
        className="cta-btn"
      >
        <FiArrowUpRight size={18} />
      </Link>

      {/* Navigation Menu (Dropdown) */}
      <nav
        className={`nav-menu ${menuOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          <li>
            <NavLink
              to="/boco-shopify-store-build"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Shopify Store Build
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/custom-shopify-landing-page"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Landing Page Design
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case-studies"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
