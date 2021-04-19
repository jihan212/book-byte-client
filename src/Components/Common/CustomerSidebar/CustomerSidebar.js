import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './CustomerSidebar.css'

const CustomerSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to={"/order/:id"} className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span><strong>Order The Service</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/customersOrders" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span><strong> Your Orders </strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faFileAlt} /> <span><strong>Add a Review</strong></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CustomerSidebar;