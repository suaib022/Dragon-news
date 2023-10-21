import React from 'react';
import Header from '../Shared/Header/Header';
import RNav from '../Shared/RNav/Rnav';
import { useParams } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const News = () => {
    const {id} = useParams();
    return (
        <div>
           <Header></Header>
           <NavBar></NavBar>
           <div className="grid md:grid-cols-4">
            <div className='col-span-3'>
                <h2>{id}</h2>
            </div>
            <div>
                <RNav></RNav>
            </div>
           </div>
        </div>
    );
};

export default News;