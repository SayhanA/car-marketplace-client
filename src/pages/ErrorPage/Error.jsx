import React from 'react';
import './Error.css'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    // console.log(error);

    return (
        <div className='relative w-full h-screen '>
            <img className='w-full h-screen' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
            <p className='text-2xl font-bold text-black absolute bottom-5 left-[50%] translate-x-[-50%]'>{error.data}</p>

            <Link to='/' className='btn btn-primary absolute bottom-20 left-[50%] translate-x-[-50%]'>Go to Home page</Link>
        </div>
    );
};

export default Error;