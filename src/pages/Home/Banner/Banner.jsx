import { Carousel } from 'flowbite-react';
import { FaLongArrowAltRight, FaRegPlayCircle } from "react-icons/fa";
import React from 'react';

const Banner = () => {
    return (

        <div className="h-[750px] sm:h-64 xl:h-[750px] 2xl:h-[750px]">
            <Carousel className='relative'>
                <div className='bg-[#453D62] h-full w-full grid lg:grid-cols-2'>
                    <div>
                        <img src="/images/children2.png" className='absolute bottom-0 -left-40 w-[900px]' alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-3xl font-bold text-white py-5 px-5 w-fit  bg-[#FF6799]'>Big discount</h3>
                        <h2 className='uppercase text-8xl font-extrabold font-mono text-[#4ACDD5]  mt-5'>Kids Offer</h2>
                        <div className='flex items-center mt-16 gap-10'>
                            <button className='py-6 px-14 rounded-full bg-[#4ACDD5] flex items-center gap-2 text-2xl text-white '>Show now <FaLongArrowAltRight /> </button>
                            <div className='relative'><FaRegPlayCircle className='text-7xl text-[#FF6799] z-50' /><span className="animate-ping absolute z-10 h-full w-full rounded-full bg-[#FF6799] top-0 opacity-75"></span></div>
                            <p className='text-2xl text-[#FF6799]'>Watch Now</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#453D62] h-full w-full grid lg:grid-cols-2'>
                    <div>
                        <img src="/images/children.png" className='absolute -bottom-20 left-40 w-[500px]' alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-3xl font-bold text-white py-5 px-5 w-fit  bg-[#FF6799]'>New Arrival</h3>
                        <h2 className='uppercase text-7xl font-extrabold font-mono text-[#4ACDD5] mt-5'>Seven Star Toys</h2>
                        <div className='flex items-center mt-16 gap-10'>
                            <button className='py-6 px-14 rounded-full bg-[#4ACDD5] flex items-center gap-2 text-2xl text-white '>Show now <FaLongArrowAltRight /> </button>
                            <div className='relative'><FaRegPlayCircle className='text-7xl text-[#FF6799] z-50' /><span className="animate-ping absolute  h-full w-full rounded-full bg-[#FF6799] top-0 opacity-75"></span></div>
                            <p className='text-2xl text-[#FF6799]'>Watch Now</p>
                        </div>
                    </div>
                </div>
                {/* <div className='bg-[#453D62] h-full w-full grid lg:grid-cols-2'>
                    <video className='w-full h-full' controls autoPlay muted >
                        <source src="https://modarri.com/static/homepage5-7d3d2b7787f017c550628f82c2b5e38f.mp4" type="video/mp4" />
                    </video>
                </div> */}
                {/* <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                /> */}
            </Carousel>
        </div>
    );
};

export default Banner;