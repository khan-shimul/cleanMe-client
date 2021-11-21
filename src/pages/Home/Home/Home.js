import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import BannerTop from '../BannerTop/BannerTop';
import InfoServices from '../InfoServices/InfoServices';

const Home = () => {
    return (
        <div>
            <NavBar />
            <BannerTop />
            <InfoServices />
            <Footer />
        </div>
    );
};

export default Home;