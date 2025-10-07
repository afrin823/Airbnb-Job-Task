import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderHeader = ({ title, onScrollLeft, onScrollRight }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3 sm:gap-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
        <span>{title} &gt;</span>
      </h2>

      <div className="flex gap-2">
        <button
          onClick={onScrollLeft}
          className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-sm"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={onScrollRight}
          className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-sm"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SliderHeader;
