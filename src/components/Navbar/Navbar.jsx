import React, { useState } from "react";
import { FaConciergeBell, FaHome, FaUserFriends } from "react-icons/fa";
import { FiGlobe, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      {/* Top section */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center text-rose-500 text-2xl sm:text-3xl gap-1 font-semibold">
          <SiAirbnb /> <span>airbnb</span>
        </div>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <button className="flex flex-col items-center text-gray-800 relative group">
            <FaHome className="text-lg mb-1" />
            <span className="text-sm font-medium">Homes</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>

          <button className="flex flex-col items-center text-gray-600 relative group">
            <MdOutlineEventAvailable className="text-lg mb-1" />
            <span className="text-sm font-medium">Experiences</span>
            <span className="absolute -top-2 right-0 bg-blue-600 text-white text-[10px] rounded-full px-1">
              NEW
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>

          <button className="flex flex-col items-center text-gray-600 relative group">
            <FaConciergeBell className="text-lg mb-1" />
            <span className="text-sm font-medium">Services</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </button>
        </nav>

        {/* Right buttons */}
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-3 space-y-3 transition-all">
          <button className="flex items-center gap-2 text-gray-800 w-full justify-start">
            <FaHome /> Homes
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full justify-start">
            <MdOutlineEventAvailable /> Experiences{" "}
            <span className="ml-1 text-[10px] bg-blue-600 text-white px-1 rounded">
              NEW
            </span>
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full justify-start">
            <FaConciergeBell /> Services
          </button>
          <button className="flex items-center gap-2 text-gray-800 w-full justify-start">
            <FaUserFriends className="text-rose-500" /> Become a host
          </button>
        </div>
      )}

      {/* Search bar */}
      <div className="flex justify-center mt-3 pb-4 px-3">
        <div className="flex flex-col sm:flex-row sm:items-center bg-white shadow-md rounded-full overflow-hidden w-full max-w-3xl">
          {/* Where */}
          <div className="flex-1 w-full sm:w-auto px-3 py-2 border-b sm:border-b-0 sm:border-r text-center sm:text-left">
            <p className="text-[11px] font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1">
              <FiGlobe size={12} /> Where
            </p>
            <p className="text-sm text-gray-400">Search destinations</p>
          </div>
          {/* Check in */}
          <div className="flex-1 w-full sm:w-auto px-3 py-2 border-b sm:border-b-0 sm:border-r text-center sm:text-left">
            <p className="text-[11px] font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1">
              🗓️ Check in
            </p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>
          {/* Check out */}
          <div className="flex-1 w-full sm:w-auto px-3 py-2 border-b sm:border-b-0 sm:border-r text-center sm:text-left">
            <p className="text-[11px] font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1">
              📅 Check out
            </p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>
          {/* Who */}
          <div className="flex-1 w-full sm:w-auto px-3 py-2 flex items-center justify-between sm:justify-start">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full sm:w-auto">
              <p className="text-[11px] font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1">
                👤 Who
              </p>
              <p className="text-sm text-gray-400">Add guests</p>
            </div>
            <button className="bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 mt-2 sm:mt-0 sm:ml-3">
              <FiSearch size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
