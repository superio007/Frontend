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
    "https://successful-bloom-8cd17fe201.strapiapp.com/api/homepage-content?populate[hero_sections][populate]=sideImage&populate[brands][populate]=brandslogos&populate[shopify_solutions][populate]=mockups&populate[customer_experience][populate]=*&populate[skills_cards][populate]=*&populate[case_study][populate]=*&populate[case_studies_cards][populate]=thumbnail&populate[brand_tag_line][populate]=*&populate[cta][populate]=*"
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

  const apiResponse = data?.data || {}; // Ensure data exists
  console.log(apiResponse);
  return (
    <>
      {apiResponse.hero_sections ? (
        <>
          <HeroSection apiRes={apiResponse.hero_sections} />
          <BrandSlider apiRes={apiResponse.brands || []} />
          <ShopifyShowcase apiRes={apiResponse.shopify_solutions || []} />
          <FeatureSection
            apiRes={apiResponse.customer_experience || {}}
            skillCard={apiResponse.skills_cards || []}
          />
          <CaseStudiesSection
            apiRes={apiResponse.case_study || {}}
            caseCards={apiResponse.case_studies_cards || []}
          />
          <CTA apiRes={apiResponse.cta || {}} />
          <Tagline apiRes={apiResponse.brand_tag_line || {}} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default HomePage;
