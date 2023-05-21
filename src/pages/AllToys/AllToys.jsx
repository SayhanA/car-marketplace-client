import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';
import Countdown from 'react-countdown';
import { Link, Navigate, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { FaAngleLeft, FaAngleRight, FaLongArrowAltRight } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';


const AllToys = () => {
    useTitle("All Toys");
    const navigate = useNavigate();
    const [carNum, setCarNum] = useState(12);
    const [data, setData] = useState([]);
    const { searchData, order } = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    // const { totalProducts } = useLoaderData();

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://b7a11-toy-marketplace-server-side-seven.vercel.app/paginate?pages=${currentPage}&limit=${itemsPerPage}&sort=${order}`)
            const data2 = await res.json();
            setProducts(data2);
        }
        fetchData()
    }, [currentPage, itemsPerPage, order])


    const options = [6, 12, 20];
    const handleSelectChange = event => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }
    console.log(products)


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

    const handleNext = (currentPage) => {
        if(pageNumbers.length > currentPage+1){
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevious = (currentPage) => {
        if( currentPage > 0 ){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleOnClick = (id) => {
        console.log(id);
        toast("You have to log in first to view details")
        
        setTimeout(()=> {
            navigate(`/car/${id}`)
         }
         ,5000);
    }
    
    return (
        <div className='relative pb-20 '>
            <div className='h-[70px] bg-[#292944]'></div>
            <div className='h-[500px] w-full relative'>
                <img src="/images/cars.png" className='w-full h-[500px]' alt="" />
                <div className='absolute top-0 h-[500px] w-full bg-[#ffdd009b]'>
                    <h2 className='lg:text-4xl text-xl text-center font-bold pt-10'>20% Discount <br /> On All Kid's Entertaining Toys</h2>
                    <p className='lg:text-3xl text-center py-5'>Offer Expires on</p>
                    <div className='bg-[#FE6B34] p-5 text-xl lg:p-14 w-fit rounded-xl lg:text-6xl font-bold text-white lg:tracking-[10px] mx-auto'><Countdown date={Date.now() + 10000 * 100000} renderer={renderer} /></div>
                    {/* <p className='p-3 bg-white w-fit rounded-md mx-auto mt-10 text-xl font-bold px-10'>shop now</p> */}
                    <p className='text-center font-bold py-10 text-2xl text-white'>We provide Best Products for Customers</p>
                </div>
            </div>
            <Search />
            
            <div className='grid lg:grid-cols-3 md:w-10/12 mx-auto gap-10 my-20'>
                {
                   !searchData && products?.map((car, index) => <div key={index} className="card  bg-base-100 shadow-xl">
                        <figure><img src={car.image} className='h-[250px]' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car?.details? car?.details.slice(0,70) : car?.features.slice(0,70)}</p>
                            <p><span className='font-bold'>Seller:</span> {car.seller} </p>
                            <p><span className='font-bold'>Sub-Category:</span> {car.category[0].value ? car.category[0].value : car.category} </p>
                            <p className='font-bold'><span className='font-bold'>Available Quantity:</span> {car.quantity} <span className='text-gray-500 font-medium'>pieces</span> </p>
                            <p className='font-bold'><span className='font-bold'>Price:</span> {car.price}$ </p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'><span className='font-bold'>Likes:</span> <Rating style={{ maxWidth: 100 }} value={car.ratings} readOnly />({car.ratings}) </div>
                                <Link onClick={() => handleOnClick(car._id)} className="btn btn-primary normal-case flex gap-3 btn-outline">Details <FaLongArrowAltRight className='text-xl' /> </Link>
                                
                            </div>
                        </div>
                    </div>)
                }
                {
                   searchData && searchData?.map((car, index) => <div key={index} className="card  bg-base-100 shadow-xl">
                        <figure><img src={car.image} className='h-[250px]' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car?.details? car?.details.slice(0,70) : car?.features.slice(0,70)}</p>
                            <p><span className='font-bold'>Seller:</span> {car.seller} </p>
                            <p><span className='font-bold'>Sub-Category:</span> {car.category[0].value ? car.category[0].value : car.category} </p>
                            <p className='font-bold'><span className='font-bold'>Available Quantity:</span> {car.quantity} <span className='text-gray-500 font-medium'>pieces</span> </p>
                            <p className='font-bold'><span className='font-bold'>Price:</span> {car.price}$ </p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'><span className='font-bold'>Likes:</span> <Rating style={{ maxWidth: 100 }} value={car.ratings} readOnly />({car.ratings}) </div>
                                <Link onClick={() => handleOnClick(car._id)} className="btn btn-primary normal-case flex gap-3 btn-outline">Details <FaLongArrowAltRight className='text-xl' /> </Link>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="pagination absolute bottom-10 left-[50%] translate-x-[-50%] flex items-center">
                <FaAngleLeft onClick={() => handlePrevious(currentPage)} className='text-5xl m-3 hover:bg-gray-400' />
                {
                    pageNumbers?.map(number => <button className={currentPage === number ? "bg-gray-500 px-5 py-2" : " px-5 py-2 border"} onClick={() => { setCurrentPage(number) }} key={number}>{number + 1}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options?.map(option => <option key={option} value={option}>
                        {option}
                    </option>)}
                </select>
                <FaAngleRight onClick={() => handleNext(currentPage)} className='text-5xl m-3 hover:bg-gray-400 '  />
            </div>
        </div>

    );
};

export default AllToys;