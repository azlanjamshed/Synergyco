import React from "react";
import { Package, Utensils } from "lucide-react";
import tradingImg from "../../assets/trading.png";
import foodImg from "../../assets/food.png";

const TradingServices = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-60">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ===== CARD 1 ===== */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-[#1A365D] font-semibold text-base sm:text-lg">
                General Trading
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              Procurement and logistics for industrial equipment, raw materials,
              and enterprise supplies with a global supply chain reach.
            </p>

            {/* Image */}
            <img
              src={tradingImg}
              alt="Trading"
              className="w-full h-[160px] sm:h-[200px] object-cover object-center rounded-md mb-4"
            />

            {/* Bottom List */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div>• Raw Materials</div>
              <div>• Safety Gear</div>
              <div>• Heavy Machinery</div>
              <div>• Office Logistics</div>
            </div>
          </div>

          {/* ===== CARD 2 ===== */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 
                    transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-500 text-white p-2 rounded-md">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-[#1A365D] font-semibold text-base sm:text-lg">
                Food Trading
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              Import-export excellence in fresh, frozen, and packaged goods,
              ensuring temperature-controlled integrity at every mile.
            </p>

            {/* Image */}
            <img
              src={foodImg}
              alt="Food Trading"
              className="w-full h-[160px] sm:h-[200px] object-cover  object-center rounded-md mb-4 "
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Fresh Produce
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Frozen Logistics
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Bulk Packaged
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingServices;
