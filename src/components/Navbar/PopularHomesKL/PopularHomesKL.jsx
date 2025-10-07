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
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          <span>
            Popular homes in Kuala Lumpur &gt;
          </span>     
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-sm"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-sm"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {apartments.map((a) => {
          const liked = likedIds.includes(a.id);
          return (
            <div
              key={a.id}
              className="flex-shrink-0 w-[200px] sm:w-[230px] md:w-[250px] lg:w-[270px] rounded-2xl overflow-hidden bg-white hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover rounded-2xl"
                />

                {a.category && (
                  <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs sm:text-[13px] px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm">
                    {a.category}
                  </div>
                )}

                <button
                  onClick={() => toggleLike(a.id)}
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
                  {a.title}
                </h3>

                <div className="flex items-center gap-1 text-[12px] sm:text-[14px] text-gray-700 mt-1">
                  <span className="font-medium">${a.price}</span>
                  {a.nights && <span className="text-gray-500">for {a.nights}</span>}
                  <span className="text-gray-400">·</span>
                  <AiFillStar className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium">{a.rating}</span>
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
