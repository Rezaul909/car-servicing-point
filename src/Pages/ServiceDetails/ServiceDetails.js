import React from 'react';
import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect( ()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    } ,[]);
    
    return (
        <div>
            <h2 className='py-5 text-center'>Service: {service.name} </h2>
            <div className='text-center my-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'> Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;