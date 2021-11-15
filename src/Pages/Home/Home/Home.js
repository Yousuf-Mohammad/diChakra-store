import React from 'react';

import Header from '../../Shared/Header/Header';



import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ReviewView from '../ReviewView/ReviewView';




import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ReviewView></ReviewView>
            <Footer></Footer>







        </div>
    );
};

export default Home;