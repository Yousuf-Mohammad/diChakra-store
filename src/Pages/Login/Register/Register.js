import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import useAuth from './../../../hooks/useAuth';
import gif from '../../../images/Register.gif'
import Header from '../../Shared/Header/Header';
import Footer from '../../Home/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, authError } = useAuth();


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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }



    return (
        <div>
            <Header></Header>
            <div className='row' style={{ marginTop: "150px" }}>
                <div className='col-md-12 col-lg-6'>
                    <img style={{ width: "70%" }} src={gif} alt="" />

                </div>

                <div className='col-md-12 col-lg-6'>
                    <h2>Please Register</h2>
                    <form onSubmit={handleLoginSubmit} style={{ width: "100%" }}>
                        <input style={{ width: "70%", margin: '5px', borderRadius: '10px', padding: '5px', textAlign: "center" }} onBlur={handleOnChange} type="name" name="name" placeholder="Your Name" id="" /><br />
                        <input style={{ width: "70%", margin: '5px', borderRadius: '10px', padding: '5px', textAlign: "center" }} onBlur={handleOnChange} type="email" name="email" placeholder="Your Email" id="" /><br />
                        <input style={{ width: "70%", margin: '5px', borderRadius: '10px', padding: '5px', textAlign: "center" }} onBlur={handleOnChange} type="password" name="password" placeholder="Password" id="" /> <br />
                        <input style={{ width: "70%", margin: '5px', borderRadius: '10px', padding: '5px', textAlign: "center" }} onBlur={handleOnChange} type="password" name="password" placeholder="Retype Password" id="" /> <br />

                        <button style={{ marginTop: '20px' }} type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                    {user?.email && <p> User Created successfully!</p>}
                    {authError && <p>{authError}</p>}

                    <p style={{ marginTop: "100px" }}>Already have an account? </p>
                    <p>Proceed to <Link to="/login">Login</Link></p>



                </div>



            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register