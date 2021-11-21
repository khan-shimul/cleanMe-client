import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import BannerTop from '../BannerTop/BannerTop';

const Home = () => {
    return (
        <div>
            <NavBar />
            <BannerTop />
            <Footer />
        </div>
    );
};

export default Home;