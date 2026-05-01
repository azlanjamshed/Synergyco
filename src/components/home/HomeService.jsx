import React from "react";
import ServiceCard from "./ServiceCard";
import { Building2, Brush, Users } from "lucide-react";
import SectionHeading from "../SectionHeading";
const HomeService = () => {
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
      <div className="max-auto px-4 sm:px-6 lg:px-12 py-10">
        <SectionHeading title="Core Service Offerings" />
        {/* Cards */}
        <div
          className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeService;
