import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
       <div className="p-2 text-center service-card">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServiceDetail;