import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import "../css/BrandSlider.css"; // Import CSS

const brands = [
];

const BrandSlider = ({ apiRes }) => {
  let latestPost = apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
  let brandslogos = apiRes[latestPost].brandslogos;
  brandslogos.map((brand) =>
    brands.push({ src: brand.url, alt: brand.alternativeText })
  );
  return (
    <div className="brand-couter-container">
      <div className="brand-slider-container">
        <div className="heading-content">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <span className="heading-text">{apiRes[latestPost].title}</span>
        </div>

        {/* Scrolling Brand Logos */}
        <div className="brand-slider">
          <div className="slider-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="slide" key={index}>
                <img
                  src={`http://localhost:1337${brand.src}`}
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
