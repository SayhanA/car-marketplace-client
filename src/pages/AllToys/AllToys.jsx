import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';
import Countdown from 'react-countdown';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import CarCard from '../Home/CarrCard/CarCard';
import { Rating } from '@smastrom/react-rating';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { AuthContext } from '../../provider/AuthProvider';


const AllToys = () => {
    useTitle("All Toys");
    const [carNum, setCarNum] = useState(12);
    const [data, setData] = useState([]);

    const { searchData } = useContext(AuthContext);

    const loader = useLoaderData();
    // console.log(loader.slice(0, 12))

    useEffect(() => {
        if(searchData){
            setData(searchData)
        }
        else{
            setData(loader)
        }
    },[searchData])

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
                    <h2 className='lg:text-4xl text-center font-bold pt-10'>20% Discount <br /> On All Kid's Entertaining Toys</h2>
                    <p className='lg:text-3xl text-center py-5'>Offer Expires on</p>
                    <div className='bg-[#FE6B34] lg:p-14 w-fit rounded-xl lg:text-6xl font-bold text-white lg:tracking-[10px] mx-auto'><Countdown date={Date.now() + 10000 * 100000} renderer={renderer} /></div>
                    {/* <p className='p-3 bg-white w-fit rounded-md mx-auto mt-10 text-xl font-bold px-10'>shop now</p> */}
                    <p className='text-center font-bold py-10 text-2xl text-white'>We provide Best Products for Customers</p>
                </div>
            </div>
            {/* <div className='grid grid-cols-3 w-10/12 mx-auto gap-10 my-20'>
                {
                    data.slice(0, 12).map((car, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={car.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car.description}</p>
                            <p><span className='font-bold'>Seller:</span> {car.seller} </p>
                            <p><span className='font-bold'>Sub-Category:</span> {car.category[0].value ? car.category[0].value : car.category} </p>
                            <p className='font-bold'><span className='font-bold'>Available Quantity:</span> {car.quantity} <span className='text-gray-500 font-medium'>pieces</span> </p>
                            <p className='font-bold'><span className='font-bold'>Price:</span> {car.price}$ </p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'><span className='font-bold'>Likes:</span> <Rating style={{ maxWidth: 100 }} value={car.ratings} readOnly />({car.ratings}) </div>
                                <Link to={`/car/${car._id}`} className="btn btn-primary normal-case flex gap-3 btn-outline">Details <FaLongArrowAltRight className='text-xl' /> </Link>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div> */}
            <div className='grid grid-cols-3 w-10/12 mx-auto gap-10 my-20'>
                {
                    data.map((car, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={car.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car?.details? car?.details.slice(0,70) : car?.features.slice(0,70)}</p>
                            <p><span className='font-bold'>Seller:</span> {car.seller} </p>
                            <p><span className='font-bold'>Sub-Category:</span> {car.category[0].value ? car.category[0].value : car.category} </p>
                            <p className='font-bold'><span className='font-bold'>Available Quantity:</span> {car.quantity} <span className='text-gray-500 font-medium'>pieces</span> </p>
                            <p className='font-bold'><span className='font-bold'>Price:</span> {car.price}$ </p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'><span className='font-bold'>Likes:</span> <Rating style={{ maxWidth: 100 }} value={car.ratings} readOnly />({car.ratings}) </div>
                                <Link to={`/car/${car._id}`} className="btn btn-primary normal-case flex gap-3 btn-outline">Details <FaLongArrowAltRight className='text-xl' /> </Link>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllToys;