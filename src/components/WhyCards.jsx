import React from "react";
import "../css/LandingPageSection.css";

const WhyUsCards = ({ features }) => {
  return (
    <div className="why-us-cards-wrapper">
      {features.map((feature, index) => (
        <div key={index} className="why-us-card">
          <div className="icon-container">
            <img width={"50%"} src={`http://localhost:1337${feature.icon}`} alt={feature.alt} className="why-us-icon" />
          </div>
          <div className="text-container">
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCards;
