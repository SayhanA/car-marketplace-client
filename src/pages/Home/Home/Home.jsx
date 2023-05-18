import React from 'react';
import useTitle from '../../../shared/hooks/useTitle';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Display from '../Display/Display';

const Home = () => {
    useTitle("Home")
    const loader = useLoaderData();
    // console.log(loader.slice(0, 6))

    return (
        <div className=' w-full'>
            <Banner />
            <h3 className='lg:text-3xl text-center font-bold py-5 pt-10'>Top Rated Selling Cars</h3>
            <div className='grid lg:grid-cols-3 p-32 pt-10 gap-10 mx-auto'>
                {
                    loader.slice(0, 6).map(car => <Display key={car._id} car={car}></Display>)
                }
            </div>
        </div>
    );
};

export default Home;