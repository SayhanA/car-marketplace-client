import React from 'react';
import useTitle from '../../../shared/hooks/useTitle';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Display from '../Display/Display';
import ReactTabs from '../Tabs/Tabs';
import Marquee from "react-fast-marquee";
import Children from '../Childerns/Childrens';
import UserReview from '../UserReview/UserRevies';

const Home = () => {
    useTitle("Home")
    const loader = useLoaderData();
    // console.log(loader.slice(0, 6))

    return (
        <div className=' w-full'>
            <Banner />
            <h3 className='lg:text-3xl text-center font-bold py-5 pt-10'>Top Rated Selling Cars</h3>
            <Marquee pauseOnHover pauseOnClick>
                {
                    loader.slice(0, 6).map(car => <Display key={car._id} car={car}></Display>)
                }
            </Marquee>  
            <Children />

            <ReactTabs/>

            <UserReview />
            
        </div>
    );
};

export default Home;