import HeroSection from "../components/HeroSection";
import BrandSlider from "../components/BrandSlider";
import ShopifyShowcase from "../components/ShopifyShowcase";
import FeatureSection from "../components/FeatureSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CTA from "../components/Cta";
import Tagline from "../components/Tagline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHomepageContent = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/homepage-content?populate[hero_sections][populate]=sideImage&populate[brands][populate]=brandslogos&populate[shopify_solutions][populate]=mockups&populate[customer_experience][populate]=*&populate[skills_cards][populate]=*&populate[case_study][populate]=*&populate[case_studies_cards][populate]=thumbnail&populate[brand_tag_line][populate]=*"
  );
  return data;
};
const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchHomepageContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <>
          <HeroSection />
          <BrandSlider />
          <ShopifyShowcase />
          <FeatureSection />
          <CaseStudiesSection />
          <CTA />
          <Tagline />
    </>
  );
};

export default HomePage;
