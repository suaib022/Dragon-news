// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LNav from '../Shared/LNav/LNav';
import NavBar from '../Shared/NavBar/NavBar';
import RNav from '../Shared/RNav/Rnav';
import Breaking from './Breaking';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <NavBar></NavBar>
            <h2 className='text-3xl font-poppins'>This Is Home</h2>
            <div className='grid lg:grid-cols-4 gap-6 grid-cols-1'>
                <div>
                    <LNav></LNav>
                </div>
                <div className='col-span-2'>
                   {
                    news.map(aNews => <NewsCard news={aNews} key={aNews._id}></NewsCard>)
                   }
                </div>
                <div>
                    <RNav></RNav>
                </div>
            </div>
        </div>
    );
};

export default Home;