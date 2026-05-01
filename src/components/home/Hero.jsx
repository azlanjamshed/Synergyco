// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <>
//       <div className="flex ">
//         <div className="flex flex-col ">
//           <div>
//             <p>Delivering Value. Building Trust.</p>
//             <h1>Your Trusted Partner for Business Solutions</h1>
//             <p>
//               Integrated Trading & Services Company across Qatar, UAE & Saudi
//               Arabia, providing institutional stability and operational
//               excellence.
//             </p>
//           </div>
//           <div className="flex flex-row">
//             <Link className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-[#1A365D] text-white hover:bg-[#2B6CB0] shadow-sm text-center cursor-pointer">
//               Our Service
//             </Link>
//             <Link className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-white text-[#1A365D] hover:text-white hover:bg-[#1A365D] shadow-sm text-center cursor-pointer">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src="data:image/jpeg;base64,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"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.jpeg"; // replace with your image

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
