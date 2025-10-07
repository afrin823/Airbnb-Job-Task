import React, { useEffect, useState } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

const LondonApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/bangkok.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Stay in London" data={apartments} />;
};

export default LondonApartment;