import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Cta = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f6f3ff",
          padding: "85px 120px 70px",
        }}
      >
        <h2
          className="text-center pb-5"
          style={{ fontSize: "48px", color: "#140152", fontWeight: "700" }}
        >
          Let’s Get Started{" "}
        </h2>
        <div className="CTA-Btn" >
          <a
            style={{
              backgroundColor: "rgb(20, 1, 82)",
              borderRadius: " 51px",
                          padding: "24px 30px",
              marginRight: "20px",
            }}
            href="#"
            rel="noopener noreferrer"
          >
            <span style={{ backgroundColor: "#140152", color: "#fff" }}>
              Book a Call
            </span>
            <span
              style={{
                backgroundColor: " rgb(255, 255, 255)",
                display: "inline-block",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginLeft: "12px",
                textAlign: "center",
              }}
            >
              <FiArrowUpRight
                style={{ color: "#140152", fontSize: "2.5rem" }}
              />
            </span>
          </a>
          <a
            style={{
              borderRadius: " 51px",
              border: "1px solid rgb(20, 1, 82)",
              padding: "24px 40px",
            }}
            href="#"
            rel="noopener noreferrer"
          >
            <span style={{ color: "rgb(20, 1, 82)" }}>Audit your Website</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
