import React from "react";
import "../css/BrandSlider.css"; // Import CSS

const brands = [
];

const landingBrandslider = ({ apiRes }) => {
  let latestPost = apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
  let brandslogos = apiRes[latestPost].brandslogos;
  brandslogos.map((brand) =>
    brands.push({ src: brand.url, alt: brand.alternativeText })
  );
  return (
    <div
      className="brand-slider-container"
      style={{ backgroundColor: "#f6f3ff", borderTop: "1px solid #e2d9ff" }}
    >
      {/* Scrolling Brand Logos */}
      <div className="brand-slider" style={{ backgroundColor: "#f6f3ff" }}>
        <div className="slider-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="slide" key={index}>
              <img src={`http://localhost:1337${brand.src}`} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default landingBrandslider;
