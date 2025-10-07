import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PopularHomes from '../../components/PopularHomes/PopularHomes';
import BangkokApartment from '../../components/BangkokApartment/BangkokApartment';
import LondonApartment from '../../components/LondonApartment/LondonApartment';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PopularHomes />
            <BangkokApartment />
            <LondonApartment />
            
            <Footer />
        </div>
    );
};

export default Home;