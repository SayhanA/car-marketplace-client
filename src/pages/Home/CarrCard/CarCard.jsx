
import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarCard = ({ data }) => {
    // console.log(data)
    const { _id, image, vehicleType, title, ratings, price, available, description, likes, seller, category, quantity } = data;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p><span className='font-bold'>Seller:</span> {seller} </p>
                <p><span className='font-bold'>Sub-Category:</span> {category[0].value ? category[0].value : category} </p>
                <p className='font-bold'><span className='font-bold'>Available Quantity:</span> {quantity} <span className='text-gray-500 font-medium'>pieces</span> </p>
                <p className='font-bold'><span className='font-bold'>Price:</span> {price}$ </p>
                <div className="card-actions justify-between">
                    <div className='flex gap-2'><span className='font-bold'>Likes:</span> <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />({ratings}) </div>
                    <Link to={`car/${_id}`} className="btn btn-primary normal-case flex gap-3 btn-outline">Details <FaLongArrowAltRight className='text-xl' /> </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;