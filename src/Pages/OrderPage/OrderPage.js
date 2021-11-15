import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';
import './OrderPage.css'

const OrderPage = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const { _id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://sheltered-taiga-17729.herokuapp.com/products/${_id}`)
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, [_id])

    const onSubmit = data => {
        data.Status = "Pending"
        fetch('https://sheltered-taiga-17729.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully')
                    reset()
                }
            })
    }
    const { user } = useAuth()
    return (
        <div>
            <Header></Header>
            <div className='container mt-5' >
                <div className='row'>
                    <h1>Order Details</h1>

                    <div className='col-lg-6  mb-5'>
                        <Card className='card'>
                            <Card.Img className="order-img" style={{ width: '100%' }} variant="top" src={serviceDetails.img} />
                            <Card.Body>
                                <h5 className='service-name'> {serviceDetails.name}</h5>
                                <h6 className='service-price'>Price: {serviceDetails.price}Tk</h6>
                                <p className="description">{serviceDetails.description}</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-6 order-service'>

                        <form className='' onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user?.displayName} {...register("Name")} />
                            <input defaultValue={user?.email} {...register("Email", { required: true })} />
                            {serviceDetails.name && <input readOnly defaultValue={serviceDetails.name} {...register("Service", { required: true })} />}
                            {serviceDetails.price && <input readOnly defaultValue={serviceDetails.price}{...register("Price", { required: true })} />}
                            <input placeholder='Address' {...register("Address", { required: true })} />
                            <input type="number" placeholder='Phone Number' {...register("Phone", { required: true })} />
                            <input className="btn btn-success" type="submit" />
                        </form>


                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderPage;