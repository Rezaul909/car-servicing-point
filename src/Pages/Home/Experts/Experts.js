import React from 'react';
import './Experts.css'
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {name:"Jone Kobir", id:"1", img: expert1},
        {name:"Jone Kholil", id:"2", img: expert2},
        {name:"Jone Abraham", id:"3", img: expert3},
        {name:"Jone Rohim", id:"4", img: expert4},
        {name:"Jone Korim", id:"5", img: expert5},
        {name:"Jone Khushi", id:"6", img: expert6},
    ]
    return (
        <div id='experts'>
            <h1 className='text-center mt-5 text-primary'>Our Experts</h1>
            <div className="experts-container container mt-5 ">
                {
                    experts.map(expert=> <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert> )
                }
            
            </div>
        </div>
    );
};

export default Experts;