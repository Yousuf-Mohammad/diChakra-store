import React from 'react';
import { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Service from '../Home/Service/Service';
import Header from '../Shared/Header/Header';

const AllProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dichakra-store-backend.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (

        <div>
            <Header></Header>


            <div id="department" className='container'>

                <div className="card-container">
                    {
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