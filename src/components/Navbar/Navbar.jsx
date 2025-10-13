import React, { useState } from "react";
import { SiAirbnb } from "react-icons/si";
import { FaUserFriends, FaUser } from "react-icons/fa";
import { FiGlobe, FiMenu, FiX, FiCalendar, FiSearch } from "react-icons/fi";
import NavItem from "./NavItem";
import SearchBarItem from "./SearchBarItem";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50 hidden md:block">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
          <div className="flex items-center text-rose-500 text-2xl sm:text-3xl gap-1 font-semibold">
            <SiAirbnb /> <span>airbnb</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavItem imgSrc="/nav1.png" label="Homes" />
            <NavItem imgSrc="/nav3.png" label="Experiences" isNew />
            <NavItem imgSrc="/nav2.png" label="Services" isNew />
          </nav>

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

        {/* Search Bar */}
        <div className="flex justify-center px-4 sm:px-8 lg:px-16 py-4">
          <div className="w-full max-w-3xl bg-white shadow-md rounded-3xl flex flex-col sm:flex-row overflow-hidden">
            <div className="flex flex-col sm:flex-row w-full">
              <SearchBarItem icon={<FiGlobe size={16} />} title="Where" subtitle="Search destinations" />
              <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
              <SearchBarItem icon={<FiCalendar size={16} />} title="Check in" subtitle="Add dates" />
              <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
              <SearchBarItem icon={<FiCalendar size={16} />} title="Check out" subtitle="Add dates" />
              <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
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

      {/*  Mobile Navbar */}
      <MobileNavbar />
    </>
  );
};

export default Navbar;
