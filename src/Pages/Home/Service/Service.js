import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, img, price } = service;
    return (
        <div className="service pb-3 mb-5" >
            <img style={{ height: '400px' }} src={img} alt="" />
            <h3>{name}</h3>
s
            <p>price :  {price} Tk</p>
            <Link to={`/services/${_id}`}>
                <button className="btn btn-primary ">Detail</button>
            </Link>
        </div>
    );
};

export default Service;