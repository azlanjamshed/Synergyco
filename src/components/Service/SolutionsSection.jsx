import React from "react";
import SectionHeading from "../SectionHeading";
import image from "../../assets/service.avif"; // replace with your image

const SolutionsSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {/* Section Heading */}
            <SectionHeading title="Our Service" />

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A365D] leading-tight">
              Comprehensive Infrastructure & Trading Ecosystem.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              At SYNERGYCO, we bridge the gap between operational excellence and
              logistical precision. From facility management to global food
              trading, we provide the backbone for modern business growth.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-first lg:order-none">
            <img
              src={image}
              alt="Infrastructure"
              className="w-full 
                         h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] 
                         object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
