import React from "react";
import FeatureCard from "./FeatureCard";
import "../css/FeatureSection.css"; // Import CSS for layout

// Import images/icons
import ConversionImage from "../assets/Conversion Rate Optimisation.png";
import UiUxImage from "../assets/UI-UX.png";
import WebDevImage from "../assets/Web.png";
import curllines from "../assets/curllines.png";

const features = [
  {
    image: ConversionImage,
    title: "Conversion Rate Optimisation",
    features: [
      "Design Optimization",
      "Speed Optimization",
      "On Page SEO",
      "Tech Maintenance & Support",
    ],
  },
  {
    image: UiUxImage,
    title: "UI / UX Design",
    features: [
      "Landing Pages",
      "Visual Identity (Web & Digital)",
      "Icons & Illustrations",
      "Assets & Components",
    ],
  },
  {
    image: WebDevImage,
    title: "Web Development",
    features: [
      "Code & E-commerce Customization",
      "Third Party & Custom Apps",
      "Front End Development",
      "Back end & CMS Setup",
    ],
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <h2 style={{ fontSize: "48px" }} className="feature-heading">
        Enhance customer experience <br />
        by focusing on the details that matters most
      </h2>

      <div className="feature-grid">
        <span className="dotted-lines">
          <img src={curllines} alt="" />
        </span>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            features={feature.features}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
