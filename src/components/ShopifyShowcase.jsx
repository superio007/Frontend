import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/ShopifyShowcase.css"; // Import the CSS file

// Import icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  { src: "src/assets/mockup1.png", alt: "Shopify Design 1" },
  { src: "src/assets/mockup2.png", alt: "Shopify Design 2" },
  { src: "src/assets/mockup3.png", alt: "Shopify Design 3" },
  { src: "src/assets/mockup4.png", alt: "Shopify Design 4" },
  { src: "src/assets/mockup5.png", alt: "Shopify Design 5" },
  { src: "src/assets/mockup6.png", alt: "Shopify Design 6" },
  { src: "src/assets/mockup7.png", alt: "Shopify Design 7" },
  { src: "src/assets/mockup8.png", alt: "Shopify Design 8" },
];

const ShopifyShowcase = () => {
  return (
    <div className="shopify-container">
      {/* Heading Section */}
      <h2 className="shopify-heading">
        <span>Stunningly Crafted Shopify Solutions</span>
        <br />
        <span>Driven by Insights</span>
      </h2>
      <p className="shopify-subheading">
        As Shopify Partners and a leading eCommerce Web Design Agency, we
        empower brands to thrive through strategic design and robust Shopify
        development. We bring a fresh strategic approach to your brand, focusing
        on delivering pixel-perfect websites, built for Conversions & Growth.
      </p>

      {/* Carousel Section */}
      <div className="shopify-slider-container">
        <button className="slider-button prev-button">
          <FaArrowLeft style={{ backgroundColor: "transparent" }} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={6} // Show 6 slides at once
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on mobile
            768: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 4 }, // 4 slides on medium screens
            1280: { slidesPerView: 6 }, // 6 slides on large screens
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="shopify-slide">
              <img src={image.src} alt={image.alt} className="shopify-image" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="slider-button next-button">
          <FaArrowRight style={{ backgroundColor: "transparent" }} />
        </button>
      </div>
    </div>
  );
};

export default ShopifyShowcase;
