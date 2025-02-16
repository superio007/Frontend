import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../css/ShopifyCTA.css";

const ShopifyCTA = ({ apiRes }) => {
  return (
    <section className="stats-section">
      <h2 className="section-title">{apiRes.title}</h2>
      <div className="stats-container">
        {apiRes.highlights.map((highlight, index) => (
          <div key={index} className="stat-box">
            <h3 className="stat-number">{highlight.heading}</h3>
            <p className="stat-text">{highlight.subheading}</p>
          </div>
        ))}
      </div>
      <a href={apiRes.TalktoUs} className="talk-button">
        Talk to Us
        <span className="arrow-circle">
          <FiArrowUpRight style={{ color: "#140152", fontSize: "18px" }} />
        </span>
      </a>
    </section>
  );
};

export default ShopifyCTA;
