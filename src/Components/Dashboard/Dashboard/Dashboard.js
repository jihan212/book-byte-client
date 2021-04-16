import React, { useState } from 'react';
import Navigation from '../../Common/Navigation/Navigation'
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }


    return (
        <section>
            <Navigation></Navigation>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;