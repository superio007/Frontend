import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/ShopifyShowcase.css"; // Import the CSS file
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShopifyShowcase = ({ apiRes }) => {
  let latestPost =
    apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
  let mockups = apiRes[latestPost].mockups;
  let mockupImages = [];
  mockups.map((mockup) =>
    mockupImages.push({
      src: mockup.url,
      alt: mockup.alternativeText,
    })
  );
  function addBr(str) {
    let words = str.split(" ");

    if (words.length > 3) {
      words.splice(4, 0, "</br>");
    }

    let newText = words.join(" ");
    return newText;
  }
  return (
    <div className="shopify-container">
      {/* Heading Section */}
      <h2
        className="shopify-heading"
        dangerouslySetInnerHTML={{ __html: addBr(apiRes[latestPost].title) }}
      />
      <p className="shopify-subheading">{apiRes[latestPost].description}</p>

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
          {mockupImages.map((image, index) => (
            <SwiperSlide key={index} className="shopify-slide">
              <img
                src={`${image.src}`}
                alt={image.alt}
                className="shopify-image"
              />
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
