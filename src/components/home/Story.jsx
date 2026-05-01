// import React from "react";
// import SectionHeading from "../SectionHeading";
// import { Link } from "react-router-dom";
// import image from "../../assets/handshake.png"; // replace with your image

// const Story = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className=" px-6 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT IMAGE */}
//           <div>
//             <img
//               src={image}
//               alt="Business handshake"
//               className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-md"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className=" mx-10 flex flex-col gap-6">
//             {/* Using your heading component */}
//             <SectionHeading title="Strategic Operational Excellence" />

//             <p className="text-[#1A365D] font-semibold leading-relaxed">
//               SYNERGYCO Trading and Services has established itself as a premier
//               provider of integrated business solutions. With a footprint
//               spanning Qatar, UAE, and Saudi Arabia, we bring international
//               standards to local markets.
//             </p>

//             {/* Quote */}
//             <div className=" pl-4 italic text-[#1A365D]">
//               "Our mission is to empower regional businesses through reliable
//               service delivery and transparent trading practices that stand the
//               test of time."
//             </div>

//             {/* Button */}
//             <Link
//               to="/about"
//               className="w-fit px-6 py-3 bg-[#1A365D] text-white rounded-md hover:bg-[#2B6CB0] transition-all duration-300"
//             >
//               Read Our Story
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;

import React from "react";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import image from "../../assets/handshake.png";

const Story = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* IMAGE (Top on mobile) */}
          <div className="order-1 lg:order-1">
            <img
              src={image}
              alt="Business handshake"
              className="w-full 
                         h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] 
                         object-cover rounded-md shadow-sm"
            />
          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-2 flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <SectionHeading title="Strategic Operational Excellence" />

            <p className="text-[#1A365D] font-semibold text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              SYNERGYCO Trading and Services has established itself as a premier
              provider of integrated business solutions. With a footprint
              spanning Qatar, UAE, and Saudi Arabia, we bring international
              standards to local markets.
            </p>

            {/* Quote */}
            <div className="pl-4 border-l-4 border-[#2B6CB0] italic text-[#1A365D] text-sm sm:text-base leading-relaxed max-w-xl">
              "Our mission is to empower regional businesses through reliable
              service delivery and transparent trading practices that stand the
              test of time."
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="w-fit px-5 sm:px-6 py-2.5 sm:py-3 
                         bg-[#1A365D] text-white rounded-md 
                         hover:bg-[#2B6CB0] 
                         transition-all duration-300"
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
