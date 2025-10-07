import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PopularHomes from '../../components/PopularHomes/PopularHomes';
import BangkokApartment from '../../components/BangkokApartment/BangkokApartment';
import LondonApartment from '../../components/LondonApartment/LondonApartment';
import TorontoApartment from '../../components/TorontoApartment/TorontoApartment';
import SeoulApartment from '../../components/SeoulApartment/SeoulApartment';
import TokyoApartment from '../../components/TokyoApartment/TokyoApartment';
import OsakaApartment from '../../components/OsakaApartment/OsakaApartment';
import MelbourneApartment from '../../components/MelbourneApartment/MelbourneApartment';
import SydneyApartment from '../../components/SydneyApartment/SydneyApartment';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PopularHomes />
            <BangkokApartment />
            <LondonApartment />
            <TorontoApartment />
            <SeoulApartment />
            <TokyoApartment />
            <OsakaApartment />
            <MelbourneApartment />
            <SydneyApartment />            
            <Footer />
        </div>
    );
};

export default Home;