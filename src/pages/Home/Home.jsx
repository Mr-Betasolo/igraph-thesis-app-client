import React from "react";

import FeatureSection from "../../components/HomeComponents/FeatureSection";
import Header from "../../components/HomeComponents/Header";
import HeroSection from "../../components/HomeComponents/HeroSection";
import TestimonialSection from "../../components/HomeComponents/TestimonialSection";
import Footer from "../../components/HomeComponents/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default Home;
