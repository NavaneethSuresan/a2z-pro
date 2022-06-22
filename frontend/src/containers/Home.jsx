import React from 'react';
import MainImage from '../components/Common/MainImage';
import rightarrow from '../assets/img/arrowright.png';
import leftarrow from '../assets/img/arrowleft.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Subscribe from '../components/Common/Subscribe';

import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
const Home = () => {
    return (
        <>
            <Header />
            <MainImage />
            <Subscribe />
            <Footer />
        </>
    );
};

export default Home;
