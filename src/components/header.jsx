import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ padding: "24px 0", gap: "4rem" }}
    >
      {/* Logo */}
      <h1 style={{ fontWeight: "700", textAlign: "left", margin: 0 ,color: "#140152"}}>boco</h1>

      {/* Navigation */}
      <nav
        style={{
          border: "1px solid #e3d9fb",
          borderRadius: "51px",
          padding: "6px 20px",
          display: "flex",
          gap: "2rem",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Shopify Store Build
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Landing Page Design
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#140152",
            fontWeight: "600",
          }}
        >
          Case Studies
        </a>
      </nav>

      {/* Call to Action Button */}
      <a
        href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ?typeform-source=www.boco.agency"
        target="_blank"
        rel="noopener noreferrer"
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
    <span className="d-none d-md-block"style={{backgroundColor: "#140152",color: "#fff"}} >Talk to Us</span>
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
      </a>
    </div>
  );
};

export default Header;
