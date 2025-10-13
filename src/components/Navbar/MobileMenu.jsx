import { FaHome, FaConciergeBell, FaUserFriends } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

const MobileMenu = () => (
  <div className="md:hidden bg-white border-t shadow-sm px-6 py-3 space-y-3">
    <button className="flex items-center gap-2 text-gray-800 w-full">
      <FaHome /> Homes
    </button>
    <button className="flex items-center gap-2 text-gray-800 w-full">
      <MdOutlineEventAvailable /> Experiences
      <span className="ml-1 text-[10px] bg-blue-600 text-white px-1 rounded">NEW</span>
    </button>
    <button className="flex items-center gap-2 text-gray-800 w-full">
      <FaConciergeBell /> Services
    </button>
    <button className="flex items-center gap-2 text-gray-800 w-full">
      <FaUserFriends className="text-rose-500" /> Become a host
    </button>
  </div>
);

export default MobileMenu;
