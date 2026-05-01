import React from "react";
import { CheckCircle, Eye, Rocket } from "lucide-react";
import SectionHeading from "../SectionHeading";

const WhoWeAre = () => {
  return (
    <section className="bg-gray-1000 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-5">
            {/* <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A365D]">
              Who We Are
            </h2> */}
            <SectionHeading title="Who We Are" />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Established in the heart of the Middle East, SYNERGYCO Trading and
              Services has evolved into a multi-sector powerhouse. We specialize
              in procurement, industrial services, and supply chain management
              across major infrastructure projects.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our philosophy is built on three pillars: Integrity, Innovation,
              and Interconnection. We don't just move products; we build
              long-term partnerships that empower local economies and drive
              sustainable industrial growth.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Direct sourcing from over 40 countries
              </div>

              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                24/7 Logistics Support Center
              </div>

              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Specialized High-Tech Service Division
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision Card */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#1A365D] mb-2">
                Our Vision
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be the primary catalyst for industrial modernization across
                the GCC, setting the benchmark for transparency and efficiency
                in global trading.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <Rocket className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#1A365D] mb-2">
                Our Mission
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Providing world-class supply chain solutions by integrating
                advanced technology, localized market intelligence, and a
                customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
