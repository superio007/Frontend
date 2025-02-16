import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import WhyCards from "./WhyCards";
import "../css/shopifyPage.css";
import { Link } from "react-router-dom";
const ShopiFyHeroSection = ({ apiRes, cards }) => {
  // console.log(cards);
  const features = [];
  cards.map((card) => {
    features.push({
      icon: card.thumbnail.url,
      alt: card.thumbnail.alternativeText,
      title: card.title,
      description: card.description,
    });
  });
  // console.log(features);
  let latestPost =
    apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
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
      <div className="p-md-5 pb-md-0 p-2">
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "bold",
            color: "#140152",
            marginBottom: "20px",
          }}
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: addBr(apiRes[latestPost].title, 8),
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
        >
          {apiRes[latestPost].description}
        </p>

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
            href={apiRes[latestPost].Audit}
            target="_blank"
            rel="noopener noreferrer"
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
            Audit My Website
          </a>
          <Link
            to={"/talk-to-us"}
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
            Talk to Us
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
          </Link>
        </div>
        {/* side image */}
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={`${apiRes[latestPost].sideimage.url}`}
            alt={apiRes[latestPost].sideimage.alternativeText}
            width={"100%"}
          />
        </div>
        <div className="shopify-features">
          <WhyCards background={"#ffffff"} width={"80px"} features={features} />
        </div>
      </div>
    </>
  );
};

export default ShopiFyHeroSection;
