import { React } from 'react';
import DashboardHeader from './DashboardHeader';
import gif from "../../images/Visual data.gif"


const Dashboard = () => {



    return (
        <div>
            <div>
                <DashboardHeader></DashboardHeader>
            </div>
            <div>
                <img style={{ width: "550px", marginTop: "70px" }} src={gif} alt="" />
            </div>
        </div>



    );
};


export default Dashboard;