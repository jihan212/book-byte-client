import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    const {_id} = service;
    return (
       <div className="col-md-4 text-center service-card">
            <img style={{height: '50px'}} src={service.imageURL} alt="" />
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="mt-3 mb-3"> Fee : ${service.fee}</p>
            <p className="text-secondary">{service.description}</p>
            <Link to={"/order/"+_id}>
            <button className="btn btn-secondary">See Details</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;