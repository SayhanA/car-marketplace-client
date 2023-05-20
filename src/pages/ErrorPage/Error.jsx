import React from 'react';
import './Error.css'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    // console.log(error);

    return (
        // <div className='relative w-full h-screen '>
        //     <img className='w-full h-screen' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        //     <p className='text-2xl font-bold text-black absolute bottom-5 left-[50%] translate-x-[-50%]'>{error.data}</p>

        //     <Link to='/' className='btn btn-primary absolute bottom-20 left-[50%] translate-x-[-50%]'>Go to Home page</Link>
        // </div>
        <div className='relative'>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="" />
            <div className='bg-[#ffffffe6] w-full h-full absolute top-0'>
                <div className='text-[350px] font-bold flex justify-center text-red-500' style={{ textShadow: "15px 10px 5px black" }}>
                    <span className='translate-x-20'>4</span>
                    <img src="https://i.ibb.co/QCSLTLW/error-fotor-bg-remover-20230520211052.png" alt="" />
                    <span className='-translate-x-20'>4</span>
                    <Link className='btn btn-primary absolute top-[500px] ' to="/">Go Back to Home page</Link>
                </div>
                <p className='pt-10 text-center text-xl font-bold text-red-500 '>{error.data}</p>
            </div>
        </div>
    );
};

export default Error;