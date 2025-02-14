import React from "react";
import "../css/FeatureCard.css"; // Import CSS for styling

const FeatureCard = ({ image, title, features,alt }) => {
  return (
    <div className="feature-card">
      <img
        src={`http://localhost:1337${image}`}
        alt={alt}
        className="feature-image"
      />
      <h3 className="feature-title">{title}</h3>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            ✓ {feature.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
