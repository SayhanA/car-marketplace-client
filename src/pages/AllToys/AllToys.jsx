import React from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';
import Countdown from 'react-countdown';


const AllToys = () => {
    useTitle("All Toys")

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div>Not Available at this moment</div>
        } else {
            // Render a countdown
            return <span>{hours}h:{minutes}m:{seconds}s</span>;
        }
    };

    return (
        <div>
            <Search />
            <div className='h-[500px] w-full relative'>
                <img src="/images/cars.png" className='w-full h-[500px]' alt="" />
                <div className='absolute top-0 h-[500px] w-full bg-[#ffdd009b]'>
                    <h2 className='lg:text-4xl text-center font-bold pt-10'>20% Discount <br /> On All Kid's Education Toys</h2>
                    <p className='lg:text-3xl text-center py-5'>Offer Expires on</p>
                    <div className='bg-[#FE6B34] lg:p-14 w-fit rounded-xl lg:text-6xl font-bold text-white lg:tracking-[10px] mx-auto'><Countdown date={Date.now() + 10000 * 100000} renderer={renderer} /></div>
                    <p className='p-3 bg-white w-fit rounded-md mx-auto mt-10 text-xl font-bold px-10'>shop now</p>
                </div>
            </div>
        </div>
    );
};

export default AllToys;