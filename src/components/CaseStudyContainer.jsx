import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import curllines from "../assets/curllines.png";
const CaseStudyContainer = ({ caseCards }) => {
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
      <div className="case-studies-grid">
        {casy.map((caseStudy, index) => (
          <CaseStudyCard key={index} {...caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyContainer;
