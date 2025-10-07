import React from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const ApartmentCard = ({ apartment, liked, toggleLike }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white hover:scale-[1.01] transition-transform duration-200">
      <div className="relative">
        <img
          src={apartment.img}
          alt={apartment.title}
          className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover rounded-2xl"
        />

        {apartment.category && (
          <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs sm:text-[13px] px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm">
            {apartment.category}
          </div>
        )}

        <button
          onClick={() => toggleLike(apartment.id)}
          className="absolute top-3 right-3 bg-white/90 rounded-full p-1 hover:bg-white"
        >
          {liked ? (
            <AiFillHeart className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <AiOutlineHeart className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      <div className="mt-2 sm:mt-3 px-2 sm:px-3">
        <h3 className="text-[14px] sm:text-[15px] text-gray-900 font-medium truncate">
          {apartment.title}
        </h3>

        <div className="flex items-center gap-1 text-[12px] sm:text-[14px] text-gray-700 mt-1">
          <span className="font-medium">${apartment.price}</span>
          {apartment.nights && (
            <span className="text-gray-500">for {apartment.nights}</span>
          )}
          <span className="text-gray-400">·</span>
          <AiFillStar className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-medium">{apartment.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
