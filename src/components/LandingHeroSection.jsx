import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const LandingHeroSection = ({ apiRes }) => {
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
  return (
    <>
      <div className="p-5 pb-0">
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "bold",
            color: "#140152",
            marginBottom: "20px",
          }}
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: addBr(apiRes.title, 4),
          }}
        />
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#060237",
            marginBottom: "24px",
            fontWeight: "400",
          }}
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: addBr(apiRes.description, 10, 21),
          }}
        />
        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href={apiRes.BookCall}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#140152",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              borderRadius: "51px",
              padding: "12px 20px",
              textDecoration: "none",
              textTransform: "none",
              fontWeight: "700",
              fontSize: "16px",
              gap: "10px",
            }}
          >
            Book a Call
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <FiArrowUpRight style={{ color: "#140152", fontSize: "18px" }} />
            </span>
          </a>
          <Link
            to={"/talk-to-us"}
            style={{
              border: "2px solid #140152",
              background: "transparent",
              color: "#140152",
              textTransform: "none",
              padding: "12px 20px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "50px",
              cursor: "pointer",
              minWidth: "180px",
            }}
          >
            Talk to Us
          </Link>
        </div>
        {/* side image */}
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={`${apiRes.sideimage.url}`}
            alt={apiRes.sideimage.alternativeText}
            width={"100%"}
          />
        </div>
      </div>
    </>
  );
};

export default LandingHeroSection;
