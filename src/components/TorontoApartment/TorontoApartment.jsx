import React, { useEffect, useState } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

const TorontoApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/bangkok.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Available next month in Toronto" data={apartments} />;
};

export default TorontoApartment;