import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bannerImg"
                        src={banner2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bannerImg"
                        src={banner3}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bannerImg"
                        src={banner4}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;