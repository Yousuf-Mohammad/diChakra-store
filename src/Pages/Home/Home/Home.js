import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Header from '../../Shared/Header/Header';



import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ReviewView from '../ReviewView/ReviewView';




import Services from '../Services/Services';


const Home = () => {
    const [products, setProducts] = useState([]);
    // const [reload, setReload] = useState(0);

    useEffect(() => {
        //     for (let index = 0; index < 6; index++) {
        //         fetch('')
        //             .then(res => res.json())
        //             .then(data => {
        //                 setProducts(data)
        //                 setReload(index)
        //             })

        //     }


        //     if (reload === 5 && products) {
        //         window.location.reload();
        //         setReload(0)
        //     }




        axios.get("https://dichakra-store-backend.onrender.com/products")
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error);
            });



    }, []);




    return (


        <div>
            <div >
                <Header></Header>
                <Banner></Banner>
                <Services></Services>
                <AboutUs></AboutUs>
                <ReviewView></ReviewView>
                <Footer></Footer>
            </div>



        </div>
    );
};

export default Home;