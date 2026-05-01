// import React from "react";
// // import { ArrowRight } from "lucide-react";

// const ServiceCard = ({ icon: Icon, title, description }) => {
//   return (
//     <div className="border border-gray-200 rounded-lg p-10 hover:shadow-md transition-all duration-300 bg-white">
//       {/* Icon */}
//       <div className="mb-4 ] text-[#2B6CB0]">
//         <Icon size={28} />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{title}</h3>

//       {/* Description */}
//       <p className="text-gray-600 text-sm leading-relaxed mb-6">
//         {description}
//       </p>

//       {/* Learn More */}
//       {/* <button className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all">
//         Learn More <ArrowRight size={16} />
//       </button> */}
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="border border-gray-200 rounded-lg 
                    p-5 sm:p-6 lg:p-8 
                    bg-white 
                    hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-4 text-[#2B6CB0]">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1A365D] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
