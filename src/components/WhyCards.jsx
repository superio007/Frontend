import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../css/LandingPageSection.css";

const WhyUsCards = ({ features, width, background }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Swiper for Mobile */}
      {isMobile ? (
        <Swiper
          spaceBetween={0} // No extra space between slides
          slidesPerView={1} // Show only one card at a time
          // pagination={{ clickable: true }}
          // modules={[Pagination]}
          className="why-us-cards-wrapper"
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className="why-us-card"
              style={{ background }}
            >
              <div className="icon-container">
                <img
                  width={width}
                  src={feature.icon}
                  alt={feature.alt}
                  className="why-us-icon"
                />
              </div>
              <div className="text-container">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* Default Flex Layout for Desktop */
        <div className="why-us-cards-wrapper">
          {features.map((feature, index) => (
            <div key={index} className="why-us-card" style={{ background }}>
              <div className="icon-container">
                <img
                  width={width}
                  src={feature.icon}
                  alt={feature.alt}
                  className="why-us-icon"
                />
              </div>
              <div className="text-container">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WhyUsCards;
