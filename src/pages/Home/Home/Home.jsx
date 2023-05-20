import React from 'react';
import useTitle from '../../../shared/hooks/useTitle';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Display from '../Display/Display';
import ReactTabs from '../Tabs/Tabs';
import Marquee from "react-fast-marquee";
import Children from '../Childerns/Childrens';
import UserReview from '../UserReview/UserRevies';
import Countdown from 'react-countdown';

const Home = () => {
    useTitle("Home")
    const loader = useLoaderData();
    // console.log(loader.slice(0, 6))

    return (
        <div className=' w-full'>
            <Banner />
            
            <h3 className='lg:text-3xl text-center font-bold py-5 pt-10'>Top Rated Selling Cars</h3>
            <Marquee pauseOnHover pauseOnClick >
                {
                    loader.slice(0, 6).map(car => <Display key={car._id} car={car}></Display>)
                }
            </Marquee>  
            <Children />

            <div className='h-[500px] w-full relative'  data-aos="fade-up">
                <img src="/images/cars.png" className='w-full h-[500px]' alt="" />
                <div className='absolute top-0 h-[500px] w-full bg-[#ffdd009b]'>
                    <h2 className='lg:text-4xl text-center font-bold pt-10'>20% Discount <br /> On All Kid's Education Toys</h2>
                    <p className='lg:text-3xl text-center py-5'>Offer Expires on</p>
                    <div className='bg-[#FE6B34] lg:p-14 w-fit rounded-xl lg:text-6xl font-bold text-white lg:tracking-[10px] mx-auto'><Countdown date={Date.now() + 10000 * 100000} /></div>
                    <p className='p-3 bg-white w-fit rounded-md mx-auto mt-10 text-xl font-bold px-10'>shop now</p>
                </div>
            </div>

            <ReactTabs/>

            <UserReview />
            
        </div>
    );
};

export default Home;