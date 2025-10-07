import React, { useEffect, useState } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

const SydneyApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/bangkok.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Check out homes in Melbourne" data={apartments} />;
};

export default SydneyApartment;





