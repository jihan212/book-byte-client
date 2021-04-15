import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Blogs from '../Blogs/Blogs/Blogs';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews/Reviews';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;