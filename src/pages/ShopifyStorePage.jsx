import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LandFAQ from "../components/LandFAQ";
import ShopiFyHeroSection from "../components/ShopiFyHeroSection";
import ShopiFyMockup from "../components/ShopifyMockups";
import ShopifyAudits from "../components/ShopifyAudits";
import Shopifycustomiztion from "../components/Shopifycustomiztion";
import ShopifyCTA from "../components/ShopifyCTA";

const fetchHomepageContent = async () => {
  const { data } = await axios.get(
    "https://successful-bloom-8cd17fe201.strapiapp.com/api/shopify-store-page?populate[landing_page_faq_sections][populate]=*&populate[shopify_cta][populate]=*&populate[shopify_audits][populate]=sideimage&populate[shopify_custamizations][populate]=sideimage&populate[shopify_hero_cards][populate]=thumbnail&populate[shopify_hero_sections][populate]=sideimage&populate[shopyfy_mockups][populate]=highlights"
  );
  return data;
};

const ShopifyStorePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["shopify-store-content"], // Unique query key
    queryFn: fetchHomepageContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const apiResponse = data?.data || {}; // Ensuring apiResponse is not undefined

  return (
    <>
      {apiResponse.shopify_hero_sections ? (
        <>
          <ShopiFyHeroSection
            apiRes={apiResponse.shopify_hero_sections || {}}
            cards={apiResponse.shopify_hero_cards || []}
          />
          <Shopifycustomiztion
            apiRes={apiResponse.shopify_custamizations || []}
          />
          <ShopiFyMockup apiRes={apiResponse.shopyfy_mockups || []} />
          <ShopifyAudits apiRes={apiResponse.shopify_audits || {}} />
          <ShopifyCTA apiRes={apiResponse.shopify_cta || {}} />
          <LandFAQ apiRes={apiResponse.landing_page_faq_sections || []} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default ShopifyStorePage;
