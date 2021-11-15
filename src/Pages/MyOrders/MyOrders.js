import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"
import DashboardHeader from '../Dashboard/DashboardHeader'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://sheltered-taiga-17729.herokuapp.com/orders')
            .then(res => res.json())

            .then((data) => {
                const myOrderList = data.filter(
                    order => order.Email === user.email
                );
                setOrders(myOrderList);
            });
    }, [user.email]);

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to Remove this Order?');
        if (confirmation) {
            const url = `https://sheltered-taiga-17729.herokuapp.com/orders/${id}`;
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


    return (

        <div>
            <DashboardHeader></DashboardHeader>
            <div id="department" className='container'>
                <h2 className="text-dark mt-5 fw-bolder">My Orders: {orders.length}</h2>


                <div className="card-container mb-5">

                    {
                        orders.map(order => <div key={order._id}>
                            <div className=" m-3 box">
                                <h5><span className="text-warning"> Name:</span> {order.Name}</h5>
                                <h5> <span className="text-warning"> Package: </span>{order.Service}</h5>
                                <h5><span className="text-warning">Address:</span> {order.Address}</h5>
                                <h5><span className="text-warning">Contact Number:</span> {order.Phone}</h5>
                                <h5><span className="text-warning">Price:</span> ${order.Price}</h5>
                                <h5><span className="text-warning ">Status:</span> {order.Status}</h5>
                                {order?.Status === 'Pending' ? <button className="btn btn-secondary mb-2" onClick={() => handleDelete(order._id)}>Cancel</button> : ''}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MyOrders;