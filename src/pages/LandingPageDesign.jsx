import React from "react";
import LandingHeroSection from "../components/LandingHeroSection";
import LandingBrandslider from "../components/landingBrandslider";
import LandingpagEndtoEnd from "../components/landingpagEndtoEnd";
import WhyUsSection from "../components/WhyusSection";
import Tagline from "../components/Tagline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHomepageContent = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/landing-page?populate[landing_page_hero_section][populate]=sideimage&populate[brands][populate]=brandslogos&populate[landing_page_end_to_end_section][populate]=sideimage&populate[landing_page_why_us_section][populate]=*&populate[landing_page_why_us_cards_sections][populate]=thumbnail&populate[shopify_solutions][populate]=mockups&populate[landing_page_faq_sections][populate]=*&populate[brand_tag_line][populate]=*"
  );
  return data;
};
const LandingPageDesign = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchHomepageContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  let apiResponse = data.data;
  // console.log(apiResponse);
  return (
    <>
      <LandingHeroSection apiRes={apiResponse.landing_page_hero_section} />
      <LandingBrandslider apiRes={apiResponse.brands} />
      <LandingpagEndtoEnd
        apiRes={apiResponse.landing_page_end_to_end_section}
      />
      <WhyUsSection apiRes={apiResponse.landing_page_why_us_section} cards={apiResponse.landing_page_why_us_cards_sections}/>
    </>
  );
};

export default LandingPageDesign;
