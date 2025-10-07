import React, { useEffect, useState } from "react";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";

const PopularHomes = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/apartment.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Popular homes in Kuala Lumpur" data={apartments} />;
};

export default PopularHomes;
