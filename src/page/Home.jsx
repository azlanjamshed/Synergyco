import React from "react";
import Hero from "../components/home/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/home/ServiceCard";
import { Building2, Brush, Users } from "lucide-react";
import Story from "../components/home/Story";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Facility Management",
      description:
        "Comprehensive building maintenance and operational management for commercial complexes.",
    },
    {
      icon: Brush,
      title: "Cleaning Services",
      description:
        "Professional industrial and commercial cleaning solutions tailored to your business standards.",
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description:
        "Reliable staffing solutions across various technical and administrative sectors in the GCC.",
    },
  ];
  return (
    <>
      <Hero />
      <div className="my-10 mx-5">
        <SectionHeading title="Core Service Offerings" />
        <div className=" md:mx-20 px-6 lg:px-12">
          {/* Heading */}
          {/* <SectionHeading title="Core Service Offerings" /> */}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <Story />
      <WhyChooseUs />
      <CTASection />
    </>
  );
};

export default Home;
