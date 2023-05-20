import { Card } from 'flowbite-react';
import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Display = ({ car }) => {
    // console.log(car)
    const { image, image5, ratings, price, title, carModel, brand, available, SKU, color } = car;

    return (
        <div className="max-w-sm ml-3 border overflow-hidden shadow-lg rounded-lg relative"  data-aos="fade-up" data-aos-duration="2000">

            <div className=' border w-[350px] h-[300px] relative' >
                <img src={image} className='absolute' alt="" />
                <div className='border absolute z-10  w-full h-full flex items-end p-5'>
                    <div>
                        <h5 className="text-lg font-semibold tracking-tight text-gray-700 dark:text-white">
                            {title}
                        </h5>
                        <div className='flex gap-3'>
                            <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
                            <span>({ratings})</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                    </div>
                </div>
               
            </div>
            
        </div>
    );
};

export default Display;