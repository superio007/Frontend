import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import "../css/CaseStudiesSection.css"; // Import section CSS
import { NavLink } from "react-router-dom";
import curllines from "../assets/curllines.png";


const CaseStudiesSection = ({ apiRes, caseCards }) => {
  let casy = [];
  let caseStudiesCards = caseCards;
  
  caseStudiesCards.map((caseStudy, index) => {
    casy.push({
      category: caseStudy.type,
      image: caseStudy.thumbnail.url,
      alt: caseStudy.thumbnail.alternativeText,
      title: caseStudy.title,
      stats: caseStudy.highlights,
      link: caseStudy.title.replaceAll(" ", "-"),
    });
  });
  return (
    <div className="case-studies-container">
      <span className="Curl-lines">
        <img src={curllines} alt="" />
      </span>
      <div className="pb-5">
        <h2 style={{ fontSize: "48px", color: "#140152", fontWeight: "700" }}>
          {apiRes.title}
        </h2>
      </div>
      <div className="case-studies-grid">
        
        {casy.map((caseStudy, index) => (
          <CaseStudyCard key={index} {...caseStudy} />
        ))}
      </div>
      <div className="py-5">
        <NavLink
          to={"/case-studies"}
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
        </NavLink>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
