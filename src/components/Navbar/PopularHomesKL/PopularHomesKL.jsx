import React, { useEffect, useState, useRef } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularHomesKL = () => {
  const [apartments, setApartments] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/aprtment.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((likedId) => likedId !== id) : [...prev, id]
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Heading with icons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Popular homes in Kuala Lumpur</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide py-2"
      >
        {apartments.map((apartment) => {
          const liked = likedIds.includes(apartment.id);
          return (
            <div
              key={apartment.id}
              className="min-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={apartment.img}
                  alt={apartment.title}
                  className="w-full h-44 object-cover rounded-t-2xl"
                />
                {apartment.badgeText && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 text-sm rounded-full shadow-sm font-medium">
                      {apartment.badgeText}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => toggleLike(apartment.id)}
                  aria-label="Toggle favorite"
                  className="absolute top-3 right-3 p-1 rounded-full bg-white/80 hover:bg-white focus:outline-none"
                >
                  {liked ? (
                    <AiFillHeart className="text-red-500 w-6 h-6" />
                  ) : (
                    <AiOutlineHeart className="text-gray-600 w-6 h-6" />
                  )}
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-base leading-tight">
                  {apartment.title}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">${apartment.price}</span>
                    {apartment.nights && (
                      <span className="text-gray-500"> for {apartment.nights} nights</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{apartment.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularHomesKL;
