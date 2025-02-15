import React from "react";
import "../css/BrandSlider.css"; // Import CSS

const brands = [];

const LandSliders = ({ apiRes }) => {
    console.log(apiRes)
    apiRes.map((brand) =>
      brands.push({
        src: brand.thumbnail.url,
        alt: brand.thumbnail.alternativeText,
        title: brand.title,
      })
    );
  return (
    <>
      <div
        className="brand-slider-container"
              style={{
            margin: "40px 0",
          borderBottom: "1px solid #e2d9ff",
          borderTop: "1px solid #e2d9ff",
        }}
      >
        {/* Scrolling Brand Logos */}
        <div className="brand-slider">
          <div className="slider-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="slide" style={{gap: "20px"}} key={index}>
                    <img
                        style={{ width: "40px" }}
                  src={`http://localhost:1337${brand.src}`}
                  alt={brand.alt}
                />
                <p style={{fontSize:"24px",fontWeight:"400px",color:"#140152"}} className="m-0 ">{brand.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default LandSliders;
