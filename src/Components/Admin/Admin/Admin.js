import React from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './Admin.css';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const Admin = () => {
    

    return (
        <div>
            <Navigation></Navigation>
        <div>
            <Sidebar></Sidebar>
        </div>
        </div>
    );
};

export default Admin;