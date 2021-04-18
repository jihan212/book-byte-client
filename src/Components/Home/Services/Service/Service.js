import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Service = () => {

    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#eda6be'}} >OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row d-flex align-items-center">     
                {
                    services.map (service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                } 
            </div>
        </section>
    );
};

export default Service;