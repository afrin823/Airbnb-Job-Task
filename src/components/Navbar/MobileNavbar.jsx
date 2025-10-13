import React from "react";
import { FiSearch } from "react-icons/fi";

const MobileNavbar = () => {
  return (
    <div className="md:hidden bg-white w-full border-b pb-3 py-2 flex flex-col items-center gap-4 shadow-sm sticky top-0 z-40">
      {/* Search bar */}
      <div className="w-[90%] bg-white border rounded-full shadow-sm flex items-center px-4 py-2">
        <FiSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Start your search"
          className="ml-2 w-full text-gray-700 text-sm focus:outline-none placeholder-gray-400"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-around w-full">
        {/* Homes */}
        <button className="flex flex-col items-center text-gray-800 text-xs font-medium relative">
          <img src="/nav1.png" alt="Homes" className="w-6 h-6" />
          <span>Homes</span>
          <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black rounded-full"></div>
        </button>

        {/* Experiences */}
        <button className="flex flex-col items-center text-gray-800 text-xs font-medium relative">
          <img src="/nav3.png" alt="Experiences" className="w-6 h-6" />
          <span>Experiences</span>
          <span className="absolute -top-1 right-2 bg-blue-600 text-white text-[9px] px-1 rounded-full">
            NEW
          </span>
        </button>

        {/* Services */}
        <button className="flex flex-col items-center text-gray-800 text-xs font-medium relative">
          <img src="/nav2.png" alt="Services" className="w-6 h-6" />
          <span>Services</span>
          <span className="absolute -top-1 right-2 bg-blue-600 text-white text-[9px] px-1 rounded-full">
            NEW
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
