import React from 'react';
import book1 from '../../../../images/book1.png';
import book2 from '../../../../images/book2.png';
import book3 from '../../../../images/book3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: book1
    },
    {
        name: 'Cavity Filling',
        img: book2
    },
    {
        name: 'Teeth Whitening',
        img: book3
    }
]

const Service = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#3A4256'}} >OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex flex-row justify-content-center">     
                {
                    serviceData.map (service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                } 
            </div>
        </section>
    );
};

export default Service;