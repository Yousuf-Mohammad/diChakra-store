import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';

import useAuth from './../../../hooks/useAuth';
import gif from '../../../images/Login.gif'
import Header from '../../Shared/Header/Header';
import Footer from '../../Home/Footer/Footer';
import "./login.css"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }



    return (
        <div>
            <Header></Header>
            <div className='row' style={{ marginTop: "5%" }}>
                <div className='col-sm-12 col-lg-6'>
                    <img className='imageLogin' src={gif} alt="" />

                </div>
                <div className='col-sm-12 col-lg-6 '>
                <div className='loginBox'>
                    <h2 style={{marginTop:"30px"}}>Please Login</h2>
                    <hr />
                    <form onSubmit={handleLoginSubmit} style={{marginTop:'50px'}}>
                        <input style={{ width: "60%", marginBottom: "10px" }} onBlur={handleOnChange} type="email" name="email" placeholder="Your Email" id="" /><br />
                        <input style={{ marginBottom: "20px", width: "60%" }} onBlur={handleOnChange} type="password" name="password" placeholder="Password" id="" /> <br />
                        <input type="submit" value="Submit" className='submitButton'/>
                        
                    </form>
                    {user?.email && <p> logged in successfully!</p>}
                    {authError && <p>{authError}</p>}

                    <p style={{ marginTop: "30px" , fontSize:"15px" }}>Dont have an account?</p>
                    <p style={{ marginTop: "-20px", fontSize:"15px" }}>Proceed to <Link to="/register">Register</Link></p>
                    </div>



                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;