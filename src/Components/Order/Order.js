import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CustomerSidebar from '../Common/CustomerSidebar/CustomerSidebar';
import Navigation from '../Common/Navigation/Navigation'
import {UserContext} from '../../App';

const Order = () => {

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [ service , setService ] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        fetch(`https://ancient-cliffs-45282.herokuapp.com/services/${id}`)
        .then (res => res.json())
        .then (data => setService(data))
    },[id])

    const handleOrder = () => {
        const newOrder = {...loggedInUser , ...service};
        fetch('https://ancient-cliffs-45282.herokuapp.com/addOrder', {
        method : 'POST',
        headers : { 'content-type': 'application/json' },
        body : JSON.stringify(newOrder)
      })
      .then (res => res.json())
      .then (data => {
        console.log(data);
      })
    }

    return (
        <div>
            <Navigation></Navigation>
            <CustomerSidebar></CustomerSidebar>
            <h1 className="text-uppercase">Place Your order</h1>
            <div className="pt-4">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service</th>
                        <th scope="col"></th>
                        <th scope="col">Service Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{service.name}</td>
                        <td></td>
                        <td>${service.fee}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <button onClick={handleOrder} className="btn btn-secondary">Order Service</button>
        </div>
    );
};

export default Order;