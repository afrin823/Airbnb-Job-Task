import React, { useEffect, useState } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

const OsakaApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/bangkok.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error(err));
  }, []);

  return <HorizontalSlider title="Places to stay in Osaka" data={apartments} />;
};

export default OsakaApartment;

