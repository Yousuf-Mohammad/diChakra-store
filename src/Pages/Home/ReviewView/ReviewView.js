
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewView.css"

const ReviewView = () => {
    const [reviews, setReviews] = useState([])

    fetch('https://dichakra-store-backend.onrender.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));

    return (
        <div id="department" className='container'>
            <h2 className="text-dark my-5 fw-bolder">Our Customers Says about us</h2>
            <Swiper className="swiper"


                slidesPerView={2}
                spaceBetween={0}
                slidesPerGroup={1}

                pagination={{
                    type: "fraction"

                }}
                loop={true}
                loopFillGroupWithBlank={false}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >
                {
                    reviews.map(reviews => <SwiperSlide><ReviewCard
                        key={reviews._id}
                        reviews={reviews}

                    ></ReviewCard> </SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};
export default ReviewView;