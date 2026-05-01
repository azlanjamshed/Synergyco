// // components/SectionHeading.jsx

// import React from "react";

// const SectionHeading = ({ para, title }) => {
//   return (
//     <div className="mb-12 border-l-4 pl-4 border-[#1A365D] ">
//       <p>{para}</p>
//       <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A365D]">
//         {title}
//       </h2>

//       {/* <div className="w-12 h-[3px] bg-blue-600 mt-3"></div> */}
//     </div>
//   );
// };

// export default SectionHeading;

// components/SectionHeading.jsx

import React from "react";

const SectionHeading = ({ para, title }) => {
  return (
    <div className="mb-8 sm:mb-10 lg:mb-12 border-l-4 pl-4 sm:pl-5 border-[#1A365D] max-w-2xl">
      {/* Small Label */}
      {para && (
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#1A365D] mb-2">
          {para}
        </p>
      )}

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A365D] leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
