import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../Common/Navigation/Navigation';
import CustomerSidebar from '../Common/CustomerSidebar/CustomerSidebar';
import {UserContext} from '../../App';

const CustomersOrders = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://ancient-cliffs-45282.herokuapp.com/order?email='+loggedInUser.email)
        .then (res => res.json())
        .then (data => setOrders(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <CustomerSidebar></CustomerSidebar>
            <h1>You have {orders.length} orders</h1>
            {
                orders.map(order => <li>You have ordered {order.name} , fee is {order.fee}</li>)
            }
        </div>
    );
};

export default CustomersOrders;