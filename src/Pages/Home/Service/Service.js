import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, img, description, price, _id} = props.service;
    const navigate = useNavigate();

    const handleServiceDetails = _id =>{
        navigate(`/service/${_id}`);
    }
    return (
        <div className='service-container mt-4'>
            <img className='w-100' src={img} alt="" />
            <h4> {name}</h4>
            <h5>Servicing Cost: ${price} </h5>
            <p><small>{description} </small></p>
            <button onClick={()=>handleServiceDetails(_id)} className='btn btn-primary d-block mx-auto'>BOOK : {name} </button>
        </div>
    );
};

export default Service;