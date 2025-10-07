import React, { useRef, useState } from "react";
import SliderHeader from "../SliderHeader/SliderHeader";
import ApartmentCard from "../ApartmentCard/ApartmentCard";

const HorizontalSlider = ({ title, data }) => {
  const [likedIds, setLikedIds] = useState([]);
  const scrollRef = useRef(null);

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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
      <SliderHeader
        title={title}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((apartment) => (
          <div
            key={apartment.id}
            className="
    flex-shrink-0
    w-[48%]  /* Mobile: 2 cards per row */
    sm:w-[45%]  /* Small screens */
    md:w-[28%] 
    lg:w-[14.28%]
  "
          >
            <ApartmentCard
              apartment={apartment}
              liked={likedIds.includes(apartment.id)}
              toggleLike={toggleLike}
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
