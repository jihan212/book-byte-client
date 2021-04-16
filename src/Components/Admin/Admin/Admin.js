import React from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './Admin.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';


/* image upload : onChange={handleImageUpload} */

const Admin = () => {
    

    return (
        <div>
            <Navigation></Navigation>
        <div className="admin">
        <div className="side-div">
        <ul className="list-unstyled">
                <li>
                    <Link to="/admin" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span><strong>Manage Services</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span><strong>Add Service</strong></span> 
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        </div>
    );
};

export default Admin;