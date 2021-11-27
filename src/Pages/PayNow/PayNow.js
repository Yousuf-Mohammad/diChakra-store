import React from 'react';
import gif from '../../images/Mobile payments.gif'
import DashboardHeader from '../Dashboard/DashboardHeader';
import "./PayNow.css"

const PayNow = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div>
                <h1 style={{ marginTop: "80px" }}> Payment Methods Comming Soon </h1>
                <img className="ani" src={gif} alt="" />
            </div>
        </div>
    );
};

export default PayNow;