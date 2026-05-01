import React from "react";
import Hero from "../components/home/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/home/ServiceCard";

import Story from "../components/home/Story";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";
import HomeService from "../components/home/HomeService";

const Home = () => {
  return (
    <>
      <Hero />

      <HomeService />

      <Story />
      <WhyChooseUs />
      <CTASection />
    </>
  );
};

export default Home;
