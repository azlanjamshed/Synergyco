// // components/CTASection.jsx

// import React from "react";
// import { Link } from "react-router-dom";

// const CTASection = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6 lg:px-12">
//         <div className="bg-[#1A365D] text-center rounded-md shadow-md py-12 px-6 lg:px-12">
//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
//             Ready to elevate your business operations?
//           </h2>

//           {/* Subtext */}
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
//             Contact our consultants today to discover how SYNERGYCO can
//             streamline your trading and service requirements.
//           </p>

//           {/* Button */}
//           <Link
//             to="/contact"
//             className="inline-block bg-white text-[#1A365D] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="bg-[#1A365D] text-center rounded-lg shadow-md 
                        py-8 sm:py-10 lg:py-12 
                        px-4 sm:px-6 lg:px-12"
        >
          {/* Heading */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                         font-semibold text-white mb-3 sm:mb-4"
          >
            Ready to elevate your business operations?
          </h2>

          {/* Subtext */}
          <p
            className="text-gray-300 max-w-2xl mx-auto 
                        text-xs sm:text-sm md:text-base 
                        mb-6 sm:mb-8 leading-relaxed"
          >
            Contact our consultants today to discover how SYNERGYCO can
            streamline your trading and service requirements.
          </p>

          {/* Button */}
          <Link
            to="/contact"
            className="inline-block 
                       bg-white text-[#1A365D] 
                       px-5 sm:px-6 py-2.5 sm:py-3 
                       text-sm sm:text-base 
                       rounded-md font-medium 
                       hover:bg-gray-200 
                       transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
