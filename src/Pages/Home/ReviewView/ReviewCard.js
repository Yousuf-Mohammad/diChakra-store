import React from 'react';
// import Rating from '../ReviewView/Rating/Rating'
import Rating from 'react-rating';
import './ReviewCard.css'



import './ReviewCard.css';


const ReviewCard = ({ reviews }) => {

    const { Name, review, rating } = reviews;
    return (
        <div className=" pb-3 reviewBox" style={{ border: "1px solid black", borderRadius: "5px" }}>

            <h3>{Name}</h3>
            <p className="px-3 ">{review}</p>
            {/* <Rating rating={rating}></Rating> */}
            <Rating className="icon-color"
                initialRating={rating}
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star "
                readonly></Rating>






        </div>
    );
};


export default ReviewCard;