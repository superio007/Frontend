import React from "react";
import "../css/CaseStudyCard.css"; // Import CSS for styling

const CaseStudyCard = ({ category, image, title, stats, link }) => {
  return (
    <div className="case-study-card">
      <div className="case-study-category">{category}</div>
      <img src={image} alt={title} className="case-study-image" />
      <div className="case-study-content">
        <h3 className="case-study-title">{title}</h3>
        <div className="case-study-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`case-study-stat ${
                index === 1 ? "stat-highlight" : ""
              }`}
            >
              <p className="stat-value m-0">{stat.value}</p>
              <p className="stat-label m-0">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <a href={link} className="case-study-link">
            Read Full Case Study ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
