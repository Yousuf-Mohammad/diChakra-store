import React from 'react';
import gif from '../../../images/Ride a bicycle.gif'

const AboutUs = () => {
    return (
        <div id="aboutus" className="container">
            <div className="row justify-content-md-center">


                <div className="col-md-12 col-sm-12 col-lg-6 mt-5">
                    <h1 style={{ marginTop: "100px" }}>
                        About Us
                    </h1>
                    <p>dichakra store is the first and largest web portal about bicycle in Bangladesh. We have started our journey on 23rd August, 2013. We publish bike specifications, price, news, tips, reviews, showroom address and brand details etc. Our basic goal is to provide bicycle related essential data to the visitors in easy way. We also share user experiences and their valuable opinion about their bicycle. So that our visitors can get some idea about the bicycle they are looking for.</p>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                    <img src={gif} alt="" />

                </div>

            </div>
        </div>
    );
};

export default AboutUs;