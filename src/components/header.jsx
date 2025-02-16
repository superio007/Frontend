import { FiArrowUpRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ padding: "24px 0", gap: "4rem" }}
    >
      {/* Logo */}
      <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
        <h1
          style={{
            textTransform: "lowercase",
            fontWeight: "700",
            textAlign: "left",
            margin: 0,
            color: "#140152",
          }}
        >
          boco
        </h1>
      </NavLink>
      {/* Navigation */}
      <nav
        style={{
          border: "1px solid #e3d9fb",
          borderRadius: "51px",
          padding: "16px 20px",
          display: "flex",
          gap: "2rem",
        }}
      >
        <NavLink
          to={"/boco-shopify-store-build"}
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Shopify Store Build
        </NavLink>
        <NavLink
          to={"/custom-shopify-landing-page"}
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Landing Page Design
        </NavLink>
        <NavLink
          to={"/case-studies"}
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Case Studies
        </NavLink>
      </nav>
      {/* Call to Action Button */}
      <Link
        to={"/talk-to-us"}
        style={{
          backgroundColor: "#140152",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "51px",
          padding: "10px 20px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "16px",
          gap: "10px",
        }}
      >
        <span
          className="d-none d-md-block"
          style={{ backgroundColor: "#140152", color: "#fff" }}
        >
          Talk to Us
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
          }}
        >
          <FiArrowUpRight style={{ color: "#140152", fontSize: "18px" }} />
        </span>
      </Link>
    </div>
  );
};

export default Header;
