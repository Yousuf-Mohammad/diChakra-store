import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import DashboardHeader from '../Dashboard/DashboardHeader';
import gif from "../../images/Self confidence.gif"
import Rating from 'react-rating';

const Review = () => {
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = rating;
        console.log(data)
        axios.post('https://dichakra-store-backend.onrender.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Posted Successfully')
                    reset();
                }
            })
    };
    const { user } = useAuth()
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div id="aboutus" className="container">
                <div className="row justify-content-md-center">
                    <h1 className="text-center mt-5"> Give us your Feedback </h1>



                    <div className="col-md-12 col-sm-12 col-lg-6 mt-5 add-service">


                        <img style={{ width: "80%" }} src={gif} alt="" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6 my-5 add-service ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("Name")} />
                            <textarea {...register("review", { required: true })} placeholder="Your Thoughts" />


                            <Rating  {...register('rating')}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star "
                                onChange={(rate) => setRating(rate)}
                                className="text-warning d-block"
                            ></Rating>




                            <input className="btn btn-secondary" type="submit" />
                        </form>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Review;