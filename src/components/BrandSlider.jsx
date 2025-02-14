import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import "../css/BrandSlider.css"; // Import CSS

const brands = [
  { src: "src/assets/Sleepy Owl.png", alt: "The Good Leaf" },
  { src: "src/assets/C2P.png", alt: "STYLISH WODROBE By Khushi" },
  { src: "src/assets/Clensta.png", alt: "Vibrant Living" },
  { src: "src/assets/Johi.png", alt: "JOHI" },
  { src: "src/assets/Realxwell.png", alt: "Relaxwell Mattresses" },
  { src: "src/assets/Sleepy Owl.png", alt: "The Good Leaf" },
  { src: "src/assets/C2P.png", alt: "STYLISH WODROBE By Khushi" },
];

const BrandSlider = () => {
  return (
    <div className="brand-couter-container">
      <div className="brand-slider-container">
        <div className="heading-content">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <span className="heading-text">90+ Brands & Counting</span>
        </div>

        {/* Scrolling Brand Logos */}
        <div className="brand-slider">
          <div className="slider-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="slide" key={index}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
