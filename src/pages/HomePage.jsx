import HeroSection from "../components/HeroSection";
import BrandSlider from "../components/BrandSlider";
import ShopifyShowcase from "../components/ShopifyShowcase";
import FeatureSection from "../components/FeatureSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CTA from "../components/Cta";
import Tagline from "../components/Tagline";
const HomePage = () => {
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
