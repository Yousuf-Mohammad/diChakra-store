import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />






const ReviewCard = ({ reviews }) => {

    const { Name, review, rating } = reviews;
    return (
        <div className=" pb-3" style={{ border: "1px solid black", borderRadius: "5px" }}>

            <h3>{Name}</h3>
            <p className="px-3">{review}</p>
            <p> {element}(rated:{rating}) </p>

        </div>
    );
};


export default ReviewCard;