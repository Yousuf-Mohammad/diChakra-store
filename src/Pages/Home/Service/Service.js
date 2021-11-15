import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, description, img, price } = service;
    return (
        <div className="service pb-3" >
            <img style={{ height: '400px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <p>price :  {price} Tk</p>
            <Link to={`/services/${_id}`}>
                <button className="btn btn-primary ">Detail</button>
            </Link>
        </div>
    );
};

export default Service;