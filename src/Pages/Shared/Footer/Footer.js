import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    // const hours = today.getHours();
    // const minutes = today.getMinutes();
    // const seconds = today.getSeconds();
    return (
        <div className='text-center my-5'>
            <h4>Copyright &#64; {date}-{month}-{year}  </h4>
            <h6>Developed By Reza</h6>
        </div>
    );
};

export default Footer;