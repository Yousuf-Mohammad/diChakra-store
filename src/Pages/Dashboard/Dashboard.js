import { React } from 'react';
import DashboardHeader from './DashboardHeader';
import gif from "../../images/Visual data.gif"
import "./Dashboard.css";


const Dashboard = () => {



    return (
        <div>
            <div>
                <DashboardHeader></DashboardHeader>
            </div>
            <div>
                <img className="ani" src={gif} alt="" />
            </div>
        </div>



    );
};


export default Dashboard;