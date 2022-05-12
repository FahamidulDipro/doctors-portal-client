import React from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import chair from '../../assets/images/chair.png'
const Appointment = () => {
    return (
        <div>
            <AppoinmentBanner>{chair}</AppoinmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;