import React from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './Admin.css';
import { Link } from 'react-router-dom';


/* image upload : onChange={handleImageUpload} */

const Admin = () => {
    

    return (
        <div>
            <Navigation></Navigation>
        <div className="admin">
        <div className="side-div">
            <h2><Link to="/productDetail">Manage Services</Link></h2>
            <h2><Link to="/addService">Add Service</Link></h2>
        </div>
        </div>
        </div>
    );
};

export default Admin;