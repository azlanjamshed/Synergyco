// components/SectionHeading.jsx

import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div className="mb-12 border-l-4 pl-4 border-[#1A365D] ">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A365D]">
        {title}
      </h2>

      {/* <div className="w-12 h-[3px] bg-blue-600 mt-3"></div> */}
    </div>
  );
};

export default SectionHeading;
