import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PopularHomesKL from '../../components/Navbar/PopularHomesKL/PopularHomesKL';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PopularHomesKL />
            Home
            <Footer />
        </div>
    );
};

export default Home;