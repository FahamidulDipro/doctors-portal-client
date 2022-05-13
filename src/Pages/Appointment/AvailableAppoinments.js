import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json').then(res=>res.json()).then(data=>setServices(data));
    },[])
    return (
        <div>
            <h3 className='text-secondary font-bold text-xl '>Available Appointments on {format(date, "PP")}</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5'>
            {
                services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
            }
            </div>
            {
                treatment&&<BookingModal date={date} treatment={treatment}></BookingModal>
            }
          
        </div>
    );
};

export default AvailableAppoinments;