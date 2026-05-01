import React from "react";
import image from "../../assets/building.png";
import SectionHeading from "../SectionHeading";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <SectionHeading para="Our Legacy" title="About Our Company" />

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A365D] leading-tight">
              Institutional Excellence in Global Trading
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              SYNERGYCO Trading and Services stands as a pillar of operational
              reliability in the global marketplace. Founded on the principles
              of transparency and strategic efficiency, we provide end-to-end
              solutions that bridge the gap between complex supply chains and
              final service delivery.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Our team of industry veterans leverages decades of collective
              experience to ensure that every transaction and every project
              meets the highest standards of corporate integrity. We don't just
              facilitate business; we build the infrastructure of trust that
              allows our partners to thrive in an increasingly volatile global
              economy.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-first lg:order-none">
            <img
              src={image}
              alt="Building"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
