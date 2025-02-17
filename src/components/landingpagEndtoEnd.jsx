import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../css/LandingPageSection.css";

const LandingPageSection = ({ apiRes }) => {
  let res = apiRes.highlights;
  const features = res.map((highlight) => ({
    icon: highlight.icon,
    title: highlight.title,
  }));

  return (
    <section
      className="landing-section"
      style={{ borderBottom: "1px solid #d6c9ff" }}
    >
      {/* Left Content */}
      <div className="content-container">
        <h1 className="heading">{apiRes.title}</h1>
        <p className="subtext">{apiRes.description}</p>
        <p className="subtext" style={{ margin: "25px 0" }}>
          {apiRes.subheading}
        </p>

        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} className="feature-icon" alt="" />
              <p className="feature-text">{feature.title}</p>
            </div>
          ))}
          <div style={{ width: "20rem" }}>
            <a
              href={apiRes.orderLink}
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
              }}
            >
              Order my Landing Page Design
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
                <FiArrowUpRight
                  style={{ color: "#140152", fontSize: "18px" }}
                />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img
          src={`${apiRes.sideimage.url}`}
          alt={apiRes.sideimage.alternativeText}
          className="side-image"
        />
      </div>
    </section>
  );
};

export default LandingPageSection;
