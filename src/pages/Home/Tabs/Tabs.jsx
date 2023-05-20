import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarCard from '../CarrCard/CarCard';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ReactTabs = () => {
    const [cars, setCars] = useState([]);
    const [props, setProps] = useState("Classic");
    const [show, setShow] = useState(false);

    useEffect(() => {
        // console.log(props);
        fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars/${props}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [props])

    return (
        <div>
            <h3 className='lg:text-4xl font-bold text-center md:pb-10 pb-5'>Our Toys & Categories</h3>
            
            <Tabs className='lg:p-32 pb-10 pt-0 '>
                <TabList >
                    <Tab onClick={() => setProps("Classic")}><p className='text-sm flex md:text-lg'>Classic <span className='sm:block hidden'>Cars</span> </p></Tab>
                    <Tab onClick={() => setProps("Sport")}><p className='text-sm flex md:text-lg'>Sports <span className='sm:block hidden'>Cars</span> </p></Tab>
                    <Tab onClick={() => setProps("Construction")}><p className='text-sm flex md:text-lg'>Construction <span className='sm:block hidden'>Vehicles</span> </p></Tab>
                    <Tab onClick={() => setProps("Emergency")}><p className='text-sm flex md:text-lg'>Emergency <span className='sm:block hidden'>Vehicles</span> </p></Tab>
                </TabList>


                <TabPanel>
                    <div className='md:grid lg:grid-cols-3 gap-10 p-5 flex flex-col'>
                        {
                            !show && cars.slice(0, 6).map((data, index) => <CarCard data={data} index={index} key={data._id}></CarCard>)
                        }
                        {
                            show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                    {
                        cars.length > 6 && <button onClick={() => setShow(!show)} className='btn btn-primary normal-case font-bold text-[17px] gap-5'>Show More <FaLongArrowAltRight className='text-xl' /> </button>
                    }
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-10 p-5'>
                        {
                            !show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                        {
                            show && cars.map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                    {
                        cars.length > 6 && !show &&<button onClick={() => setShow(!show)} className='btn btn-primary normal-case font-bold text-[17px] gap-5 border float-right'>Show More <FaLongArrowAltRight className='text-xl' /> </button> 
                    }
                    {
                        cars.length > 6 && show &&<button onClick={() => setShow(!show)} className='btn btn-primary normal-case font-bold text-[17px] gap-5 border float-right'>Show Less <FaLongArrowAltRight className='text-xl' /> </button> 
                    }
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-10 p-5'>
                        {
                            !show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                        {
                            show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                    {
                        cars.length > 6 && <button onClick={() => setShow(!show)} className='btn btn-primary normal-case font-bold text-[17px] gap-5'>Show More <FaLongArrowAltRight className='text-xl' /> </button>
                    }
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-10 p-5'>
                        {
                            !show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                        {
                            show && cars.slice(0, 6).map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                    {
                        cars.length > 6 && <button onClick={() => setShow(!show)} className='btn btn-primary normal-case font-bold text-[17px] gap-5'>Show More <FaLongArrowAltRight className='text-xl' /> </button>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;