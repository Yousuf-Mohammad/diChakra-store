
import React, { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import DashboardHeader from '../Dashboard/DashboardHeader'
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dichakra-store-backend.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     fetch('https://sheltered-taiga-17729.herokuapp.com/products/:id')
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
    // }, [])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to Remove this Order?');
        if (confirmation) {
            const url = `https://dichakra-store-backend.onrender.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully.')
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div id="department" className='container'>
                <h2 className="text-dark mt-5 fw-bolder ">Total Products: {products.length}</h2>


                <div className="card-container mb-5 ">

                    {
                        products.map(product => <div key={product._id}>
                            <div className="  box">

                                <h5><span className="text-warning"> Name:</span> {product.name}</h5>
                                <h5> <span className="text-warning"> Description: </span>{product.description}</h5>

                                <h5><span className="text-warning">Price:</span> {product.price} Tk</h5>

                                <button className="btn btn-secondary mb-2" onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;