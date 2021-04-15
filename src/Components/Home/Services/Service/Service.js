import React from 'react';
import book1 from '../../../../images/book1.png';
import book2 from '../../../../images/book2.png';
import book3 from '../../../../images/book3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Book Selling',
        img: book1
    },
    {
        name: 'Book Borrowing',
        img: book2
    },
    {
        name: 'Book Buying',
        img: book3
    }
]

const Service = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#eda6be'}} >OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row d-flex align-items-center">     
                {
                    serviceData.map (service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                } 
            </div>
        </section>
    );
};

export default Service;