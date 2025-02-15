import React from "react";
import ShopifyShowcase from "./ShopifyShowcase";
const LandShowcase = ({ apiRes }) => {
  return (
    <>
      <ShopifyShowcase apiRes={apiRes} />
      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        <a
          href={apiRes.TalktoUs}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid #423f67",
            background: "transparent",
            color: "#060237",
            textTransform: "none",
            padding: "18px 48px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "50px",
            cursor: "pointer",
            minWidth: "180px",
          }}
        >
          Explore Case Studies
        </a>
      </div>
    </>
  );
};

export default LandShowcase;
