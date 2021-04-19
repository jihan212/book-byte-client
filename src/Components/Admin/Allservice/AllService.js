import React, { useEffect, useState } from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import Sidebar from '../../Common/Sidebar/Sidebar';
import './allService.css';

const AllService = () => {

    const [ allServices , setAllServices ] = useState([]);

    useEffect(() =>{
        fetch(`https://ancient-cliffs-45282.herokuapp.com/services`)
        .then (res => res.json())
        .then (data => setAllServices(data))
    },[])

    return (
        <div>
            <Navigation></Navigation>
            <Sidebar></Sidebar>
            
            <div className="allServices">
                <h1 className="text-uppercase">All Services in this library</h1> 
                {
                    allServices.map(allServices => <li> {allServices.name} </li>)
                }
            </div>
        </div>
    );
};

export default AllService;