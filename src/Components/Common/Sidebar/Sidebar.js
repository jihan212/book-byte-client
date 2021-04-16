import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/admin" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span><strong>Admin</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span><strong>Add Service</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span><strong>Services</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faFileAlt} /> <span><strong>Reviews</strong></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;