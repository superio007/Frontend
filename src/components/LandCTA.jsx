import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
const LandCTA = ({ apiRes }) => {
  return (
    <>
      <div style={{ padding: " 40px", borderTop: "1px solid #d6c9ff" }}>
        <Tagline apiRes={apiRes} />
        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to={"/talk-to-us"}
            style={{
              backgroundColor: "#140152",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              borderRadius: "51px",
              padding: "20px 35px",
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
      </div>
    </>
  );
};

export default LandCTA;
