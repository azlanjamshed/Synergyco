// components/ServiceCard.jsx

import React from "react";
// import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-10 hover:shadow-md transition-all duration-300 bg-white">
      {/* Icon */}
      <div className="mb-4 ] text-[#2B6CB0]">
        <Icon size={28} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Learn More */}
      {/* <button className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </button> */}
    </div>
  );
};

export default ServiceCard;
