import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.avif"; // replace with your image

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className=" mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-12 ">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            <p className="text-sm tracking-widest text-[#2B6CB0] uppercase font-medium">
              Delivering Value. Building Trust.
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] leading-tight">
              Your Trusted Partner for Business Solutions
            </h1>

            <p className="text-[#1A365D] text-base sm:text-lg leading-relaxed max-w-xl">
              Integrated Trading & Services Company across Qatar, UAE & Saudi
              Arabia, providing institutional stability and operational
              excellence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-md font-medium bg-[#1A365D] text-white hover:bg-[#2B6CB0] transition-all duration-300 shadow-sm text-center"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-md font-medium border border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={image}
              alt="Building"
              className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
