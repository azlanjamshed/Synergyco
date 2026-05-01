import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-30 ">
        <div
          className="bg-[#1656C1] rounded-2xl 
                        px-5 sm:px-8 lg:px-12 
                        py-6 sm:py-8 lg:py-20 
                        flex flex-col lg:flex-row 
                        items-start lg:items-center 
                        justify-between 
                        gap-5 lg:gap-8 "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold mb-2">
              Ready to scale your operations?
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Connect with our consultants to build a tailored service package
              that meets your enterprise demands.
            </p>
          </div>

          {/* BUTTON */}
          <Link
            to="/contact"
            className="bg-white text-[#1656C1] 
                       px-5 sm:px-6 py-2.5 sm:py-3 
                       rounded-lg font-medium text-sm sm:text-base 
                       hover:bg-gray-200 transition whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
