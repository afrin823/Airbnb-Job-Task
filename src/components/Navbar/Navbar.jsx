import React, { useState } from "react";
import { FaConciergeBell, FaHome, FaUserFriends, FaUser } from "react-icons/fa";
import { FiGlobe, FiMenu, FiSearch, FiX, FiCalendar } from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
        <div className="flex items-center text-rose-500 text-2xl sm:text-3xl gap-1 font-semibold">
          <SiAirbnb /> <span>airbnb</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <button className="flex flex-col items-center text-gray-800 relative group">
            <img src="/nav1.png" alt="homes" className="w-12 h-12" />
            <span className="text-sm font-medium">Homes</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>
          <button className="flex flex-col items-center text-gray-600 relative group">
            <img src="/nav3.png" alt="experiences" className="w-12 h-12" />
            <span className="text-sm font-medium">Experiences</span>
            <span className="absolute -top-2 right-0 bg-blue-600 text-white text-[10px] rounded-full px-1">
              NEW
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>
          <button className="flex flex-col items-center text-gray-600 relative group">
            <img src="/nav2.png" alt="services" className="w-12 h-12" />
            <span className="text-sm font-medium">Services</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-800 hover:underline">
            <FaUserFriends className="text-base text-rose-500" />
            Become a host
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiGlobe size={18} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-3 space-y-3">
          <button className="flex items-center gap-2 text-gray-800 w-full">
            <FaHome /> Homes
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full">
            <MdOutlineEventAvailable /> Experiences{" "}
            <span className="ml-1 text-[10px] bg-blue-600 text-white px-1 rounded">NEW</span>
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full">
            <FaConciergeBell /> Services
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full">
            <FaUserFriends className="text-rose-500" /> Become a host
          </button>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex justify-center px-4 sm:px-8 lg:px-16 py-4">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-3xl flex flex-col sm:flex-row overflow-hidden">

          {/* Mobile: stacked */}
          <div className="flex flex-col sm:flex-row w-full">
            {/* Where */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-3xl">
              <div className="flex items-center gap-1">
                <FiGlobe size={16} />
                <p className="text-sm font-semibold text-gray-800">Where</p>
              </div>
              <p className="text-xs text-gray-400">Search destinations</p>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

            {/* Check In */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-3xl">
              <div className="flex items-center gap-1">
                <FiCalendar size={16} />
                <p className="text-sm font-semibold text-gray-800">Check in</p>
              </div>
              <p className="text-xs text-gray-400">Add dates</p>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

            {/* Check Out */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-3xl">
              <div className="flex items-center gap-1">
                <FiCalendar size={16} />
                <p className="text-sm font-semibold text-gray-800">Check out</p>
              </div>
              <p className="text-xs text-gray-400">Add dates</p>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

            {/* Who + Search */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-between px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:gap-2">
                <div className="flex items-center gap-1">
                  <FaUser size={16} />
                  <p className="text-sm font-semibold text-gray-800">Who</p>
                </div>
                <p className="text-xs text-gray-400">Add guests</p>
              </div>
              <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 mt-2 sm:mt-0 sm:ml-3 shrink-0">
                <FiSearch size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
