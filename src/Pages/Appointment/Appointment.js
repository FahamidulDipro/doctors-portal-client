import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import chair from '../../assets/images/chair.png'
import AvailableAppoinments from './AvailableAppoinments';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}>{chair}</AppoinmentBanner>
            <AvailableAppoinments date={date} ></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;