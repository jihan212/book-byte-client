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
                    <Link to="/user/orders" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Orders</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/services" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Services</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/admin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/user/review" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Reviews</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;