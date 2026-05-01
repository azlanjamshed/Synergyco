// components/WhyChooseUs.jsx

import React from "react";
import SectionHeading from "../SectionHeading";
import { ShieldCheck, Globe, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Unwavering Reliability",
    desc: "Our processes are designed for consistency, ensuring your operations never miss a beat.",
  },
  {
    icon: Globe,
    title: "Regional Footprint",
    desc: "Strong presence in Qatar, UAE, and KSA providing seamless cross-border support.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    desc: "Transparent pricing models that focus on long-term value and operational efficiency.",
  },
  {
    icon: Users,
    title: "Expert Manpower",
    desc: "Access to a vetted pool of highly skilled professionals across diverse disciplines.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className=" mx-10 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            <SectionHeading title="Why Industry Leaders Choose SYNERGYCO" />

            <p className="text-gray-600 leading-relaxed max-w-md">
              We combine regional expertise with a disciplined corporate
              approach to deliver measurable results for our clients.
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className="text-blue-600 mt-1">
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
