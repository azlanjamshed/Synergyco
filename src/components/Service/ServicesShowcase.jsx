// import React from "react";
// import SectionHeading from "../SectionHeading";
// import { Wrench, CheckCircle, Users } from "lucide-react";
// import image from "../../assets/tech.avif"; // replace with your image

// const ServicesShowcase = () => {
//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-12">
//         {/* ===== TOP SECTION ===== */}
//         <div className="mb-10 sm:mb-12">
//           <SectionHeading para="Our Services" title="Facility Management" />

//           <p className="text-gray-600 text-sm sm:text-base">
//             End-to-end upkeep and technical optimization.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 ">
//           {/* LEFT BIG IMAGE CARD */}
//           <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
//             <img
//               src={image}
//               alt="MEP Services"
//               className="w-full h-[250px] sm:h-[320px] lg:h-[360px] object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/80 to-transparent p-6 flex flex-col justify-end">
//               <h3 className="text-white text-lg sm:text-xl font-semibold">
//                 MEP & Technical Services
//               </h3>

//               <p className="text-gray-200 text-sm mt-1 max-w-md">
//                 Mechanical, Electrical, and Plumbing solutions designed for
//                 commercial high-rises and industrial hubs.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
//             <div className="mb-4 text-blue-600">
//               <Wrench className="w-6 h-6" />
//             </div>

//             <h3 className="text-[#1A365D] font-semibold text-base sm:text-lg mb-2">
//               Preventive Upkeep
//             </h3>

//             <p className="text-gray-600 text-sm leading-relaxed mb-4">
//               Scheduled maintenance cycles that extend asset life and reduce
//               emergency repairs by up to 30% annually.
//             </p>

//             <div className="flex flex-col gap-2 text-sm text-gray-700">
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="w-4 h-4 text-blue-600" />
//                 24/7 Support
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="w-4 h-4 text-blue-600" />
//                 Asset Lifecycle Mgmt
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== BOTTOM SECTION ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
//           {/* CLEANING SERVICES */}
//           <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
//             <h3 className="text-[#1A365D] text-lg sm:text-xl font-semibold mb-2">
//               Cleaning Services
//             </h3>

//             <p className="text-gray-600 text-sm mb-4">
//               Hygiene standards that exceed international benchmarks for
//               commercial, residential, and industrial environments.
//             </p>

//             {/* Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
//               {["Commercial", "Industrial", "Sanitization", "Residential"].map(
//                 (item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-100 rounded-md p-3 text-sm text-[#1A365D] font-medium"
//                   >
//                     {item}
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>

//           {/* MANPOWER CARD */}
//           <div className="bg-[#1A365D] text-white rounded-xl p-5 sm:p-6 shadow-md">
//             <div className="mb-4">
//               <Users className="w-6 h-6" />
//             </div>

//             <h3 className="text-lg sm:text-xl font-semibold mb-2">
//               Manpower Supply
//             </h3>

//             <p className="text-gray-200 text-sm mb-4">
//               Specialized workforce deployment across technical, administrative,
//               and construction domains.
//             </p>

//             <div className="flex flex-col gap-2 text-sm">
//               <div className="flex justify-between">
//                 <span>Construction Crew</span>
//                 <span className="bg-white/20 px-2 rounded text-xs">Vetted</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Admin Support</span>
//                 <span className="bg-white/20 px-2 rounded text-xs">
//                   Bilingual
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Technical Engineers</span>
//                 <span className="bg-white/20 px-2 rounded text-xs">
//                   Certified
//                 </span>
//               </div>
//             </div>

//             <button className="mt-5 w-full bg-white text-[#1A365D] py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition">
//               Request Staffing
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesShowcase;

import React from "react";
import SectionHeading from "../SectionHeading";
import { Wrench, CheckCircle, Users } from "lucide-react";
import image from "../../assets/tech.avif";

const ServicesShowcase = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <div className="mb-10">
          <SectionHeading title="Facility Management" />
          <p className="text-gray-600 text-sm sm:text-base">
            End-to-end upkeep and technical optimization.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ===== TOP LEFT (BIG IMAGE) ===== */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden group">
            <img
              src={image}
              alt=""
              className="w-full h-[260px] sm:h-[320px] lg:h-[340px] object-cover  group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/80 to-transparent p-6 flex flex-col justify-end ">
              <h3 className="text-white text-lg font-semibold">
                MEP & Technical Services
              </h3>
              <p className="text-gray-200 text-sm">
                Mechanical, Electrical, and Plumbing solutions designed for
                commercial high-rises and industrial hubs.
              </p>
            </div>
          </div>

          {/* ===== TOP RIGHT ===== */}
          <div
            className="bg-white  rounded-xl p-5 shadow-sm  hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
          >
            <Wrench className="w-6 h-6 text-blue-600 mb-3" />

            <h3 className="text-[#1A365D] font-semibold mb-2">
              Preventive Upkeep
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Scheduled maintenance cycles that extend asset life and reduce
              emergency repairs by up to 30% annually.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Asset Lifecycle Mgmt
              </div>
            </div>
          </div>

          {/* ===== BOTTOM LEFT ===== */}
          <div
            className="lg:col-span-2 bg-white  rounded-xl p-5  hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
          >
            <h3 className="text-[#1A365D] text-lg font-semibold mb-2">
              Cleaning Services
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Hygiene standards that exceed international benchmarks.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {["Commercial", "Industrial", "Sanitization", "Residential"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-3 rounded text-sm text-[#1A365D]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* ===== BOTTOM RIGHT ===== */}
          <div
            className="bg-[#1A365D] text-white rounded-xl p-5 shadow-md  hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
          >
            <Users className="w-6 h-6 mb-3" />

            <h3 className="text-lg font-semibold mb-2">Manpower Supply</h3>

            <p className="text-gray-200 text-sm mb-4">
              Specialized workforce deployment across domains.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Construction Crew</span>
                <span className="bg-white/20 px-2 rounded text-xs">Vetted</span>
              </div>

              <div className="flex justify-between">
                <span>Admin Support</span>
                <span className="bg-white/20 px-2 rounded text-xs">
                  Bilingual
                </span>
              </div>

              <div className="flex justify-between">
                <span>Technical Engineers</span>
                <span className="bg-white/20 px-2 rounded text-xs">
                  Certified
                </span>
              </div>
            </div>

            <button className="mt-4 w-full bg-white text-[#1A365D] py-2 rounded">
              Request Staffing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
