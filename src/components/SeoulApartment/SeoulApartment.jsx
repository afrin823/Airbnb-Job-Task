import React, { useEffect, useState } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

const SeoulApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/bangkok.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Homes in Seoul" data={apartments} />;
};

export default SeoulApartment;