import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-uppercase" style={{color: '#3A4256'}}> The wonderful world of reading </h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-secondary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img style={{height:"450px"}} src={banner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Banner;