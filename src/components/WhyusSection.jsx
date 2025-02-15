import React from "react";
import WhyUsCards from "./WhyCards";
import "../css/LandingPageSection.css";

const WhyUsSection = ({ apiRes, cards }) => {
  const whyCards = cards.map((card) => ({
    icon: card.thumbnail.url,
    alt: card.thumbnail.alternativeText,
    title: card.title,
    description: card.subTitle,
  }));
  return (
    <section className="why-us-section">
      <h3 className="why-us-title">{apiRes.subTitle}</h3>
      <h2 className="why-us-heading" style={{ color: "#060237" }}>
        {apiRes.title}
      </h2>
      <div className="why-us-container">
        <WhyUsCards features={whyCards} />
      </div>
    </section>
  );
};

export default WhyUsSection;
