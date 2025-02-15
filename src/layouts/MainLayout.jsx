import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      {isMobile ? <MobileHeader /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
