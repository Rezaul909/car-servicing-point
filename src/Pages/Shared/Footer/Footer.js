import React from 'react';
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    // const hours = today.getHours();
    // const minutes = today.getMinutes();
    // const seconds = today.getSeconds();
    return (
        <div className='text-center text-white my-5 py-5 bg-secondary'>
            <h3>Copyright &#64; {date}-{month}-{year}  </h3>
            <h5 className='mb-4'>Developed By Reza</h5>
            <FaGoogle size='2em' color="green"></FaGoogle> &nbsp;&nbsp;
            <FaFacebookSquare size='2em' color="blue"></FaFacebookSquare> &nbsp;&nbsp;
            <FaGithub size='2em' color='black'></FaGithub>
        </div>
    );
};

export default Footer;