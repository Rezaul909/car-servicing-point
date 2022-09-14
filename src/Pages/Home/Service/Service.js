import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, img, description, price} = props.service;
    return (
        <div className='service-container mt-4'>
            <img className='w-100' src={img} alt="" />
            <h4> {name}</h4>
            <h5>Servicing Cost: ${price} </h5>
            <p><small>{description} </small></p>
            <button className='btn btn-primary '>BOOK : {name} </button>
        </div>
    );
};

export default Service;