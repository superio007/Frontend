import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LandFAQ.css"; // Import custom CSS

const FAQ = ({ apiRes }) => {
  const faqs = [
  ];
  apiRes.map((faq) => faqs.push({ question: faq.question, answer: faq.answer }));
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2
        className="faq-header"
        style={{
          color: "#060237",
          fontSize: "48px",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: " 700",
          lineHeight: "83%",
          display: "flex",
          padding: "3rem",
        }}
      >
        Frequently Asked Questions
      </h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openIndex === index ? "" : "collapsed"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openIndex === index ? "show" : ""
              }`}
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
