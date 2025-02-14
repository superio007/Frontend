import React from "react";
import FeatureCard from "./FeatureCard";
import "../css/FeatureSection.css"; // Import CSS for layout
import curllines from "../assets/curllines.png";

const FeatureSection = ({ apiRes, skillCard }) => {
  let skillCards = skillCard;
  function addBr(str, cut1, cut2) {
    let words = str.split(" ");

    if (words.length > cut1) {
      words.splice(cut1, 0, "<br>");
    }

    if (words.length > cut2 + 1) {
      // Adjusting for the shift caused by the first insertion
      words.splice(cut2 + 1, 0, "<br>");
    }

    return words.join(" ");
  }
  let skill = [];
  skillCards.map((skillCard) => {
    skill.push({
      image: skillCard.thumbnail.url,
      alt: skillCard.thumbnail.alternativeText,
      title: skillCard.title,
      features: skillCard.highlights,
    });
  });

  return (
    <div className="feature-section">
      <h2
        style={{ fontSize: "48px" }}
        className="feature-heading"
        dangerouslySetInnerHTML={{
          __html: addBr(apiRes.title, 3),
        }}
      />
      <div className="feature-grid">
        <span className="dotted-lines">
          <img src={curllines} alt="" />
        </span>
        {skill.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            features={feature.features}
            alt={feature.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
