import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, img, description, price, id} = props.service;
    const navigate = useNavigate();

    const handleServiceDetails = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container mt-4'>
            <img className='w-100' src={img} alt="" />
            <h4> {name}</h4>
            <h5>Servicing Cost: ${price} </h5>
            <p><small>{description} </small></p>
            <button onClick={()=>handleServiceDetails(id)} className='btn btn-primary '>BOOK : {name} </button>
        </div>
    );
};

export default Service;