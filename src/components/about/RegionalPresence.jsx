import React from "react";
import { ArrowRight } from "lucide-react";

import qatar from "../../assets/qatar.png";
import uae from "../../assets/UAE.png";
import saudi from "../../assets/Saudi.png";
import SectionHeading from "../SectionHeading";

const regions = [
  {
    image: qatar,
    title: "Qatar",
    desc: "Operations Hub focusing on Energy, Construction, and Major Infrastructure Logistics.",
    link: "Regional HQ",
  },
  {
    image: uae,
    title: "UAE",
    desc: "Strategic Logistics and International Sourcing center located in Dubai World Central.",
    link: "Distribution Hub",
  },
  {
    image: saudi,
    title: "Saudi Arabia",
    desc: "Specialized Industrial Services supporting the Vision 2030 Giga-projects.",
    link: "Industrial Services",
  },
];

const RegionalPresence = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <SectionHeading title=" Our Regional Presence" />
        <div className=" max-w-2xl  mb-10 sm:mb-12">
          {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A365D] mb-3">
            Our Regional Presence
          </h2> */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Strategically positioned to serve the most dynamic markets in the
            Arab world, our localized teams ensure rapid response and cultural
            alignment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-20 mx-10">
          {regions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A365D] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Link */}
                {/* <div className="flex items-center gap-2 text-blue-600 text-sm font-medium cursor-pointer hover:gap-3 transition">
                  {item.link} <ArrowRight className="w-4 h-4" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;
