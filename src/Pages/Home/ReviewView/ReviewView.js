
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewView.css"


const ReviewView = () => {
    const [reviews, setReviews] = useState([])


    fetch('')
        .then(res => res.json())
        .then(data => setReviews(data));
    useEffect(() => {

        axios.get("https://dichakra-store-backend.onrender.com/reviews")
            .then(response => {
                setReviews(response.data)

            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            axios.get("https://dichakra-store-backend.onrender.com/reviews")
                .then(response => {
                    setReviews(response.data)

                })
                .catch(error => {
                    console.log(error);
                });
        }, 6000);
    }, [])


    const isLoading = Boolean(reviews.length !== 0);

    return (
        <div id="department" className='container'>
            <h2 className="text-dark fw-bolder">Our Customers Says About Us</h2>
            <hr />
            {
                !isLoading ?
                    <img className='loadingGif' src="https://cdn.dribbble.com/users/2634687/screenshots/5610971/post.gif" width="1000px" alt="" />
                    : <Swiper className="swiper"


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
                    </Swiper>}
        </div >
    );
};
export default ReviewView;