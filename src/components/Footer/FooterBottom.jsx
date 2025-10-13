import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-200 text-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 text-gray-600 text-center sm:text-left">
          <span>© 2025 Airbnb, Inc.</span>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Sitemap</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Your Privacy Choices</a>
        </div>

        {/* Right */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-gray-700">
          <button className="flex items-center gap-1 hover:underline">
            <FaGlobe className="text-base" /> English (US)
          </button>
          <button className="hover:underline">$ USD</button>
          <div className="flex gap-3">
            <a href="#" className="hover:text-black"><FaFacebookF /></a>
            <a href="#" className="hover:text-black"><FaTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
