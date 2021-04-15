import React from 'react';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews/Reviews';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;