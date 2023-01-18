
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import "./ReviewView.css"

const ReviewView = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://dichakra-store-backend.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div id="department" className='container'>
            <h2 className="text-dark my-5 fw-bolder">Our Customers Says about us</h2>
            <div className="card-container">
                {
                    reviews.map(reviews => <ReviewCard
                        key={reviews._id}
                        reviews={reviews}

                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};
export default ReviewView;