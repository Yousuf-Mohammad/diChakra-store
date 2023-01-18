import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dichakra-store-backend.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="department" className='container'>
            <h2 className="text-dark my-5 fw-bolder">Grab your Ride</h2>
            <div className="card-container">
                {
                    products.slice(0, 6).map(service => <Service  //
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;