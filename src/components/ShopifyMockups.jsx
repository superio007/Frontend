import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/ShopifyMockups.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShopiFyMockup = ({ apiRes }) => {
  // Ensure `apiRes` exists and has `highlights`
  if (!apiRes || !Array.isArray(apiRes) || apiRes.length === 0) {
    return <p>No data available.</p>;
  }

  // Get latest post safely
  const latestPostIndex = apiRes.length - 1;
  const mockupImage = apiRes[latestPostIndex]?.highlights || [];

  // Transform images properly
  const mockupImages = mockupImage.map((mockup) => ({
    src: `http://localhost:1337${mockup.url}`, // Ensure correct URL format
    alt: mockup.alternativeText || "Mockup Image",
  }));

  return (
    <div className="shopify-container">
      {/* Carousel Section */}
      <div className="shopify-slider-container">
        {/* Navigation Buttons */}
        <button className="slider-button prev-button">
          <FaArrowLeft />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={4}
          slidesPerView={3} // Show 3 slides at once
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {mockupImages.map((image, index) => (
            <SwiperSlide key={index} className="shopify-slide">
              <img
                src={image.src}
                alt={image.alt}
                className="shopify-image"
                style={{ maxWidth: "340px", boxShadow: "none" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button className="slider-button next-button">
          <FaArrowRight />
        </button>
      </div>
      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          padding: "40px 0 0 0",
          justifyContent: "center",
        }}
      >
        <a
          href=""
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
          Explore Case Studies
        </a>
      </div>
    </div>
  );
};

export default ShopiFyMockup;
