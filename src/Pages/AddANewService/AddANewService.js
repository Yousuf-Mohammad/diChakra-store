import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddANewService.css';
import gif from "../../images/Logistics.gif"
import DashboardHeader from '../Dashboard/DashboardHeader';





const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Updated Successfully')
                    reset();
                }
            })
    };

    return (
        <div>
            <DashboardHeader></DashboardHeader>

            <div id="aboutus" className="container">
                <div className="row justify-content-md-center">
                    <h1 className="text-center mt-5">Add a Product</h1>



                    <div className="col-md-12 col-sm-12 col-lg-6 mt-5 add-service">


                        <img src={gif} alt="" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6 my-5 add-service">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <textarea {...register("description", { required: true })} placeholder="Description" />
                            <input type="number" {...register("price", { required: true })} placeholder="Price" />
                            <input {...register("img", { required: true })} placeholder="Image Url" />

                            <input className="btn btn-dark" type="submit" />
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AddANewService;