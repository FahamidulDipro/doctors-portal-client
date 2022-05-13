import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinments = ({date}) => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json').then(res=>res.json()).then(data=>setServices(data));
    },[])
    return (
        <div>
            <h3 className='text-secondary font-bold text-xl '>Available Appointments on {format(date, "PP")}</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5'>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
          
        </div>
    );
};

export default AvailableAppoinments;