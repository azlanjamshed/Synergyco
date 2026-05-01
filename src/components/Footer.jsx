// import React from "react";
// import { MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-600 mt-5">
//       {/* Top Section */}
//       <div className="mx-10 px-6 lg:px-12 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* Logo / About */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               SYNERGYCO
//             </h3>
//             <p className="text-sm leading-relaxed max-w-xs">
//               Precision in Global Trade. Your trusted partner for integrated
//               business solutions across the Middle East.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-semibold text-gray-900 mb-4">
//               Quick Links
//             </h4>
//             <ul className="space-y-2 text-sm flex flex-col">
//               <Link to="/about" className="hover:text-[#1A365D] cursor-pointer">
//                 About
//               </Link>
//               <Link
//                 to="/service"
//                 className="hover:text-[#1A365D] cursor-pointer"
//               >
//                 Service
//               </Link>
//               <Link
//                 to="/contact"
//                 className="hover:text-[#1A365D] cursor-pointer"
//               >
//                 Contact
//               </Link>
//             </ul>
//           </div>

//           {/* Global Presence */}
//           <div>
//             <h4 className="text-sm font-semibold text-gray-900 mb-4">
//               Global Presence
//             </h4>

//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <MapPin size={14} />
//                 Qatar HQ
//               </li>

//               <li className="flex items-center gap-2">
//                 <MapPin size={14} />
//                 UAE Regional Office
//               </li>

//               <li className="flex items-center gap-2">
//                 <MapPin size={14} />
//                 Saudi Arabia Logistics Hub
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-200 py-4 text-center text-sm">
//         © 2024 SYNERGYCO Trading and Services. Precision in Global Trade.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Logo / About */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              SYNERGYCO
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed max-w-xs">
              Precision in Global Trade. Your trusted partner for integrated
              business solutions across the Middle East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-[#1A365D] transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-[#1A365D] transition">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1A365D] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
              Global Presence
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Qatar HQ
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                UAE Regional Office
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Saudi Arabia Logistics Hub
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-3 sm:py-4 text-center text-xs sm:text-sm">
        © 2024 SYNERGYCO Trading and Services. Precision in Global Trade.
      </div>
    </footer>
  );
};

export default Footer;
