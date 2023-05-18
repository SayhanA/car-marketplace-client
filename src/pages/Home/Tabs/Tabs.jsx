import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarCard from '../CarrCard/CarCard';

const ReactTabs = () => {
    const [cars, setCars] = useState([]);
    const [props, setProps] = useState("Classic")

    useEffect(() => {
        console.log(props);
        fetch(`http://localhost:5000/cars/${props}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [props])

    return (
        <div>
            <h3 className='lg:text-4xl font-bold text-center pb-10'>Our Toys & Categories</h3>
            
            <Tabs className='p-32 pb-10 pt-0 '>
                <TabList >
                    <Tab onClick={() => setProps("Classic")}>Classic Cars</Tab>
                    <Tab onClick={() => setProps("Sport")}>Sports Cars</Tab>
                    <Tab onClick={() => setProps("Construction")}>Construction Vehicles</Tab>
                    <Tab onClick={() => setProps("Emergency")}>Emergency Vehicles</Tab>
                </TabList>


                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        {
                            cars.map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        {
                            cars.map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        {
                            cars.map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        {
                            cars.map(data => <CarCard data={data} key={data._id}></CarCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;