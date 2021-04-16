import React from 'react';
import CustomerSidebar from '../Common/CustomerSidebar/CustomerSidebar';
import Navigation from '../Common/Navigation/Navigation'

const Order = () => {
    return (
        <div>
            <Navigation></Navigation>
            <CustomerSidebar></CustomerSidebar>
            <h1>This is order</h1>
        </div>
    );
};

export default Order;