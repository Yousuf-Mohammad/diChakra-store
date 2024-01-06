import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {

        axios.get("https://dichakra-store-backend.onrender.com/products")
            .then(response => {
                setProducts(response.data)
                
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            axios.get("https://dichakra-store-backend.onrender.com/products")
                .then(response => {
                    setProducts(response.data)

                })
                .catch(error => {
                    console.log(error);
                });
        }, 6000);
    })


    const isLoading = Boolean(products.length !== 0);


    return (
        <div id="department" className='container'>
            <h2 className="text-dark my-5 fw-bolder">Grab your Ride</h2>
            <div className="card-container">

                {
                    !isLoading ?
                        <img className='loadingGif' src="https://cdn.dribbble.com/users/1244169/screenshots/10734151/media/f5ed073f979bb7c38f1b9ecc9ff043b5.gif" width="1000px" alt="" />
                        : products.slice(0, 6).map(service => <Service  //
                            key={service._id}
                            service={service}


                        ></Service>)
                        
                }
                

            </div>
            <Link to={`/allProducts`}>
                <button className="btn moreButton">More Products</button>
            </Link>
        </div>
    );
};

export default Services;