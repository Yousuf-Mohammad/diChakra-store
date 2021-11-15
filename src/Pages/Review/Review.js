import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import DashboardHeader from '../Dashboard/DashboardHeader';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviews', data)
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


                        <img src='' alt="" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6 my-5 add-service">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("Name")} />
                            <textarea {...register("review", { required: true })} placeholder="Your Thoughts" />
                            <input type="number" {...register("rating", { required: true })} placeholder="Rating out of 5" />


                            <input className="btn btn-secondary" type="submit" />
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;