import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-xs sticky top-0 z-50 shadow-[#1A365D] ">
      <div
        className="w-full px-10 flex items-center justify-between  "

        //     className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between `}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer h-10 w-25 md:h-20 md:w-40"
        >
          {/* <img src={logo} alt="logo" className=" object-contain" /> */}
          <h1>Synergyco</h1>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex  gap-20 font-bold text-gray-700 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1A365D] font-black underline  decoration-2"
                  : "hover:text-[#2B6CB0] transition"
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1A365D] font-black underline "
                  : "hover:text-[#2B6CB0] transition"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1A365D] font-black underline "
                  : "hover:text-[#2B6CB0] transition"
              }
              to="/service"
            >
              Service
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1A365D] font-black underline "
                  : "hover:text-[#2B6CB0] transition"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        {/* <div className="flex items-center gap-4"> */}
        <div className={`md:hidden flex items-center gap-4 `}>
          {/* Language Toggle */}

          {/* <NavLink
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-lg font-medium  px-4 py-2 rounded-full cursor-pointer"
          >
            {t("reach_us") || "Reach Us"}
          </NavLink> */}
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-4 font-medium text-gray-700 `}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1A365D] font-black underline "
                : "hover:text-[#2B6CB0] transition"
            }
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1A365D] font-black underline "
                : "hover:text-[#2B6CB0] transition"
            }
            to="/about"
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1A365D] font-black underline "
                : "hover:text-[#2B6CB0] transition"
            }
            to="/service"
            onClick={() => setOpen(false)}
          >
            Service
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1A365D] font-black underline "
                : "hover:text-[#2B6CB0] transition"
            }
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
