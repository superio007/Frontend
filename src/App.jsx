import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import BrandSlider from "./components/BrandSlider";
import ShopifyShowcase from "./components/ShopifyShowcase";
import FeatureSection from "./components/FeatureSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CTA from "./components/Cta";
import Tagline from "./components/Tagline";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <HeroSection />
        <BrandSlider />
        <ShopifyShowcase />
        <FeatureSection />
        <CaseStudiesSection />
        <CTA />
        <Tagline />
        <Footer />
        </div>
    </>
  );
}

export default App
