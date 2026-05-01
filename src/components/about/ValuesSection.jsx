import React from "react";
import { ShieldCheck, Clock, Leaf, Users } from "lucide-react";

const valuesData = [
  {
    tag: "CORE PILLARS",
    title: "Operational Values",
    items: [
      {
        icon: ShieldCheck,
        title: "Integrity First",
        desc: "Transparent dealings in every transaction.",
      },
      {
        icon: Clock,
        title: "Precision Logistics",
        desc: "Optimized timing for critical deliveries.",
      },
    ],
  },
  {
    tag: "FUTURE FOCUS",
    title: "Sustainability Goals",
    items: [
      {
        icon: Leaf,
        title: "Green Initiatives",
        desc: "Reducing carbon footprint in maritime trade.",
      },
      {
        icon: Users,
        title: "Community Impact",
        desc: "Supporting local development through trade.",
      },
    ],
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-gray-1000 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-20">
          {valuesData.map((section, idx) => (
            <div
              key={idx}
              className="border border-gray-200 bg-white rounded-lg p-6 sm:p-8"
            >
              {/* Header */}
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-2">
                {section.tag}
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-[#1A365D] mb-6">
                {section.title}
              </h3>

              {/* Items */}
              <div className="flex flex-col gap-4">
                {section.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 
                                 bg-gray-50 p-4 sm:p-5 rounded-md"
                    >
                      {/* Icon */}
                      <div className="text-blue-600 mt-1">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
