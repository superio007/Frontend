import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          textAlign: "left",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "bold",
            color: "#140152",
            marginBottom: "20px",
          }}
        >
          We build high-converting <br />
          Shopify stores that drive Profit
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#5A5A5A",
            marginBottom: "30px",
          }}
        >
          We're a leading Shopify & Shopify Plus agency who design and develop
          strategic ecommerce websites
        </p>

        {/* Bullet Points */}
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
          {[
            "Unmatched Speed & Stability",
            "Build for Conversions",
            "Reduced App Stack & Developer Dependencies",
          ].map((text, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  color: "#8D6FF0",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              >
                ✔
              </span>
              <span
                style={{
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontWeight: "bold",
                  color: "#140152",
                }}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button
            style={{
              border: "2px solid #140152",
              background: "transparent",
              color: "#140152",
              padding: "12px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "50px",
              cursor: "pointer",
              minWidth: "180px",
            }}
          >
            Audit My Website
          </button>

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
              padding: "12px 20px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
              gap: "10px",
              minWidth: "180px",
            }}
          >
            Talk to Us
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
      </div>

      {/* Right Section (Image) */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <img
          src="src\assets\hero image.png"
          alt="Shopify Store Preview"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
