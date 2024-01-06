import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Home/Footer/Footer';
import Service from '../Home/Service/Service';
import Header from '../Shared/Header/Header';
import "./AllProducts.css"
const AllProducts = () => {

    const [products, setProducts] = useState([])



    useEffect(() => {

        axios.get("https://dichakra-store-backend.onrender.com/products")
            .then(response => {
                setProducts(response.data)
                console.log(products)
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

        }, 3000);

    }, []);

    const isLoading = Boolean(products?.length !== 0);



    return (

        <div>
            <Header></Header>


            <div id="department" className='container'>


                <div className="card-container products">

                    {

                        !isLoading ?
                            <img className='loadingGif' src="https://cdn.dribbble.com/users/1244169/screenshots/10734151/media/f5ed073f979bb7c38f1b9ecc9ff043b5.gif" width="1000px" alt="" />
                            :
                            products.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>

    );

};

export default AllProducts;