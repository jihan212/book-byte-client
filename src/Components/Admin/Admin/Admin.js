import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './Admin.css';
import Sidebar from '../../Common/Sidebar/Sidebar';
import { UserContext } from '../../../App';


const Admin = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ allOrders , setAllOrders ] = useState([]);

    useEffect(() => {
        fetch('https://ancient-cliffs-45282.herokuapp.com/order')
        .then (res => res.json())
        .then (data => setAllOrders(data))
    },[])

    return (
        <div>
            <Navigation></Navigation>
            <Sidebar></Sidebar>
            <div>
                <h2>All Orders of This Library</h2>
                {
                allOrders.map(allOrders => <li> { allOrders.name} ordered by  {allOrders.email}</li>)
                }
            </div>
        </div>
    );
};

export default Admin;