// components/AboutSection.jsx

import React from "react";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import image from "../../assets/handshake.png"; // replace with your image

const Story = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className=" px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={image}
              alt="Business handshake"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className=" mx-10 flex flex-col gap-6">
            {/* Using your heading component */}
            <SectionHeading title="Strategic Operational Excellence" />

            <p className="text-[#1A365D] font-semibold leading-relaxed">
              SYNERGYCO Trading and Services has established itself as a premier
              provider of integrated business solutions. With a footprint
              spanning Qatar, UAE, and Saudi Arabia, we bring international
              standards to local markets.
            </p>

            {/* Quote */}
            <div className=" pl-4 italic text-[#1A365D]">
              "Our mission is to empower regional businesses through reliable
              service delivery and transparent trading practices that stand the
              test of time."
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="w-fit px-6 py-3 bg-[#1A365D] text-white rounded-md hover:bg-[#2B6CB0] transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
