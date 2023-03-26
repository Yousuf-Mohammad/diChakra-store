import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Home/Footer/Footer';
import Service from '../Home/Service/Service';
import Header from '../Shared/Header/Header';

const AllProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get("https://dichakra-store-backend.onrender.com/products")
            .then(response => {
                setProducts(response.data)
                console.log(products)
            })
            .catch(error => {
                console.log(error);
            });
        axios.get("https://dichakra-store-backend.onrender.com/products")
            .then(response => {
                setProducts(response.data)
                console.log(products)
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => { setLoading(false) }, 4000);
    }, []);

    return (

        <div>
            <Header></Header>


            <div id="department" className='container'>

                <div className="card-container">
                    {
                        loading ?
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