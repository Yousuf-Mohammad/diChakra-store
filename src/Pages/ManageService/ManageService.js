import React, { useEffect, useState } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import './ManageService.css'
const ManageService = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders/:id')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])



    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully.')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }


    const handleUpdate = (id) => {
        const updated = 'Shipped';
        const updatedOrder = {
            Name: orders.Name,
            Email: orders.Email,
            Address: orders.Address,
            Phone: orders.Phone,
            Service: orders.Service,
            Price: orders.Price,
            Status: updated
        }
        setOrders(updatedOrder);

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)


        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    alert('Update Successful');

                    setOrder(data);

                    window.location.reload();




                }
            })

    }



    return (
        <div >
            <DashboardHeader></DashboardHeader>
            <div id="department" className='container'>
                <h2 className="text-dark my-5 fw-bolder">All Orders</h2>
                <div className="card-container mb-5">
                    {

                        orders.map(order => <div key={order._id}>
                            <div className=" m-2  box">
                                <h5><span className="text-warning">Customer Name:</span> {order.Name}</h5>
                                <h5> <span className="text-warning">Ordered Package: </span>{order.Service}</h5>
                                <h5><span className="text-warning">Address:</span> {order.Address}</h5>
                                <h5><span className="text-warning">Contact Number:</span> {order.Phone}</h5>
                                <h5><span className="text-warning">Price:</span> ${order.Price}</h5>
                                <h5><span className="text-warning">Status:</span> {order.Status}</h5>
                                {order?.Status === 'Pending' ? <button className="btn btn-success me-2 mb-2" onClick={() => handleUpdate(order._id)}>Approve</button> : ''}
                                {order?.Status === 'Pending' ? <button className="btn btn-danger mb-2" onClick={() => handleDelete(order._id)}>Delete</button> : ''}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};


export default ManageService;