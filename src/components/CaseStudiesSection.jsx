import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import "../css/CaseStudiesSection.css"; // Import section CSS

// Import images
import FashionImage from "../assets/Fashion study thumbnail.png";
import HealthImage from "../assets/health and fitness.png";
import curllines from "../assets/curllines.png";

const caseStudies = [
  {
    category: "Fashion",
    image: FashionImage,
    title:
      "Stylish Wodrobe saw a 3X growth in revenue within 90 days of revamp",
    stats: [
      { value: "3×", label: "Revenue Growth" },
      { value: "1.87 s", label: "Site Load Speed" },
      { value: "48%", label: "Increased CVR" },
    ],
    link: "#",
  },
  {
    category: "Health & Wellness",
    image: HealthImage,
    title:
      "Store Revamp for The Good Leaf doubles revenue & boosts conversions by 40%",
    stats: [
      { value: "150%", label: "Increased CVR" },
      { value: "1.87 s", label: "Site Load Speed" },
      { value: "25%", label: "Lift in AOV" },
    ],
    link: "#",
  },
];

const CaseStudiesSection = () => {
  return (
    <div className="case-studies-container">
      <span className="Curl-lines">
        <img src={curllines} alt="" />
      </span>
      <div className="pb-5">
        <h2 style={{ fontSize: "48px", color: "#140152", fontWeight: "700" }}>
          Read our recent Case Studies
        </h2>
      </div>
      <div className="case-studies-grid">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} {...caseStudy} />
        ))}
      </div>
      <div className="pt-5">
        <a
          href="#"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            borderRadius: "51px",
            padding: " 10px 60px",
            textDecoration: "none",
            fontWeight: "700",
            border: "1px solid rgb(20, 1, 82)",
          }}
        >
          View Case Studies
        </a>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
