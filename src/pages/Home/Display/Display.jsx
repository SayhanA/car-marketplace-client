import { Card } from 'flowbite-react';
import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Display = ({ car }) => {
    console.log(car)
    const { image, ratings, price, title } = car;

    return (
        <div className="max-w-sm h-[450px] border overflow-hidden shadow-lg rounded-lg">
            <Card className='border-none shadow-none'
                imgAlt={title}
                imgSrc={image}
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>

                <div className='flex gap-3'>                
                    <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
                    <span>({ratings})</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    <a
                        href="#"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </Card>
        </div>
    );
};

export default Display;