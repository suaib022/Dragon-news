import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Breaking = () => {
    return (
        <div className='flex shadow-md'>
            <button className='btn btn-danger bg-red-700'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className='mr-6'>Gorom Khobor</Link>
                <Link to="/" className='mr-6'>Gorom Khobor</Link>
                <Link to="/" className='mr-6'>Gorom Khobor</Link>
            </Marquee>
        </div>
    );
};

export default Breaking;