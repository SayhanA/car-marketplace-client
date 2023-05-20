import './Car.css'
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../shared/hooks/useTitle';
import { FaChevronLeft, FaChevronRight, FaHandPointLeft, FaRegBookmark, FaRegHandPointLeft } from 'react-icons/fa';
import { data } from 'autoprefixer';
import { Rating } from '@smastrom/react-rating';
import { AuthContext } from '../../provider/AuthProvider';
import Search from '../../shared/Search/Search';

const Car = () => {
    useTitle(" Single Car");
    const [num, setNum] = useState(1);
    const loader = useLoaderData()
    // console.log(loader)
    const { _id, vehicleType, title, sellerEmail, seller, scale, ratings, quantity, price, packaging, likes, image5, image4, image3, image2, image, features, details, description, color, category, carModel, brand, available, UPC, SKU } = loader[0];
    const [img, setImg] = useState(image)

    const { user } = useContext(AuthContext);

    const decrease = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }
    const increase = () => {
        if (num < quantity) {
            setNum(parseInt(num) + 1)
        }
    }

    const handleInput = (e) => {
        e.preventDefault()
        const num = e.target.value;
        setNum(num)
    }

    return (
        <div>
            <Search />
            <div className='px-32 pb-10 py-20 grid grid-cols-2'>

                <div className='p-20 relative'>
                    <img src={img} className='w-full' alt="car image" />
                    <div className='flex absolute left-0 bottom-10 w-full'>
                        <img onClick={() => setImg(image2)} className='w-[25%] border w-full' src={image2} alt="" />
                        <img onClick={() => setImg(image3)} className='w-[25%] border w-full' src={image3} alt="" />
                        <img onClick={() => setImg(image4)} className='w-[25%] border w-full' src={image4} alt="" />
                        <img onClick={() => setImg(image5)} className='w-[25%] border w-full' src={image5} alt="" />
                    </div>
                    <div className='flex items-center text-xl font-bold absolute left-0 bottom-0'><Rating style={{ maxWidth: 150 }} value={ratings} readOnly /> ({ratings}) </div>
                    <div className='absolute top-5 left-5 text-3xl flex items-center'><FaRegBookmark />{likes}L</div>
                </div>
                <div className=''>
                    <h2 className='text-3xl font-semibold leading-[70px]'>{title}</h2>
                    <h2 className='text-3xl font-semibold leading-[30px]'>{carModel}</h2>
                    <p className='pt-2'>{brand}</p>{available ? <p className='text-blue-500 font-bold'>(Available)</p> : "Not Available"}
                    <h2 className='text-3xl font-bold pt-3 mb-8'>${price}</h2>
                    <hr />

                    <p className='pt-5'><span className='font-bold pr-2 '>SUK:</span>{SKU}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>UPC:</span>{UPC}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Seller Name:</span>{seller}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Seller Email:</span>{sellerEmail}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Car Brand:</span>{brand}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Car Model:</span>{carModel}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Color:</span>{color}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Packaging:</span>{packaging}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Scale:</span>{scale}scale</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Vehicle Type:</span>{vehicleType}</p>
                    <p className='pt-1'><span className='font-bold pr-2 '>Stock:</span>{quantity}pieces</p>

                    <div className='pt-4 flex items-center'>
                        <p className='font-bold'>Quantity:</p>
                        <FaChevronLeft onClick={decrease} className='border w-10 h-10 text-gray-500 ml-5' /> <input style={{ WebkitOverflowScrolling: "none" }} onChange={handleInput} type="number" className='w-14' value={num} /> <FaChevronRight onClick={increase} className='border w-10 h-10 text-gray-500' />
                    </div>
                    <div className='flex gap-5'>
                        <button className='btn btn-primary rounded-sm w-[200px] mt-10'>Add to Cart</button>
                        <button className='btn btn-primary rounded-sm w-[200px] mt-10'>Save to Wishlist</button>
                    </div>
                </div>
            </div>

            <p className='mx-32 p-2 border-b-0 w-fit border text-3xl font-bold text-red-900'>Overview</p>
            <div className='border mx-32 my-10 p-5'>
                <h2 className='text-3xl font-semibold text-gray-600 pb-10'>PRODUCT DESCRIPTION</h2>
                <div>
                    <span className='text-bold text-2xl text-gray-500'>{carModel}, {color}, {brand}-{SKU}W-{scale}scale {title} </span>
                </div>
                <p className='pt-4'>Description: {description} {details}</p>

                <div className='pt-6 font-bold'>
                    <p className='font-bold text-lg py-3'>Features</p>
                    {
                        features.map((data, index) => <li key={index}>{data}</li>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Car;