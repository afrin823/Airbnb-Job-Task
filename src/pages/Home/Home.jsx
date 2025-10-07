import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PopularHomesKL from '../../components/PopularHomesKL/PopularHomesKL';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PopularHomesKL />
            
            <Footer />
        </div>
    );
};

export default Home;