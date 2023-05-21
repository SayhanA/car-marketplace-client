import React, { useContext, useState } from 'react';
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";

import useTitle from '../../shared/hooks/useTitle';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Search from '../../shared/Search/Search';
// import Select from 'react-select/dist/declarations/src/Select';

const AddAToy = () => {
    useTitle("Add A Toy")
    const [isAdd, setIsAdd] = useState(false);
    const [data, setData] = useState(null);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const { user } = useContext(AuthContext);

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        let n = (Math.random() * 0xfffff * 1000000).toString(16);

        data.seller = user.displayName;
        data.sellerEmail = user.email;
        data.features = text;
        data.description = text2;
        // data.category = "New Added"
        data.UPC = (n + "-XUV");
        data.SKU = (n + "-XUV") + "-234234";
        data.packaging = "Box";
        console.log(data)
        setData(data)
        fetch('https://b7a11-toy-marketplace-server-side-seven.vercel.app/cars', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleTextarea = event => {
        event.preventDefault();
        const text = event.target.value;
        const split = text.split('.')
        setText(split)
    }

    const handleTextareaDescription = e => {
        e.preventDefault();
        const text2 = e.target.value;
        setText2(text2);
    }


    return (
        <div id='root'>
            <Search />
            <h3 className='lg:text-4xl text-center font-bold py-20'>Add Your Toy & Join Us</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mb-20">

                <div className="grid md:grid-cols-2 gap-20">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <input  {...register("title", { required: true })} placeholder="Product name" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <div>
                            <input type="text"  {...register("image", { required: true })} placeholder="Product Photo" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                            <div onClick={() => setIsAdd(!isAdd)} className='flex items-center gap-3'><p className='text-blue-500 font-bold'>Add Additional Photos</p>{isAdd ? <FaChevronUp /> : <FaChevronDown />}</div>
                            <div className={isAdd ? "block" : "hidden"}>
                                <input type="text"  {...register("image2", { required: false })} placeholder="Product Photo2" className="pt-5 lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <input type="text"  {...register("image3", { required: false })} placeholder="Product Photo3" className="pt-5 lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <input type="text"  {...register("image4", { required: false })} placeholder="Product Photo4" className="pt-5 lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <input type="text"  {...register("image5", { required: false })} placeholder="Product Photo5" className="pt-5 lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                            </div>
                        </div>

                        <input type="number"  {...register("price", { required: true, })} placeholder="Product Price" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                        <input type="text" defaultValue="White" {...register("color", { required: false })} placeholder="Product Color" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                        <textarea onChange={handleTextarea} name="features" value={text} cols="30" rows="3" className='w-full' placeholder='Product Description'></textarea>
                        <textarea onChange={handleTextareaDescription} name="description" value={text2} cols="30" rows="3" className='w-full' placeholder='Product Features'></textarea>

                    </div>
                    <div className="flex flex-col gap-10">
                        <input type="text" {...register("carModel", { required: true })} placeholder="Model Name" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <input type="text" defaultValue="" {...register("ratings", { required: true })} placeholder="Product Ratings" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />

                        <input type="number" defaultValue="" {...register("quantity", { required: true })} placeholder="Product Quantity" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />
                        <input type="number" defaultValue="" {...register("scale", { required: false })} placeholder="Product Scale" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />
                        <input type="text" defaultValue="" {...register("carModel", { required: false })} placeholder="Product Model" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />
                        <div className='flex items-center gap-5'>
                            <p className='font-bold'>Available:</p>
                            <select defaultValue='true' {...register("available")}>
                                <option value="true">Available</option>
                                <option value="false">Out Of Stock</option>
                                <option value="other">Up Coming</option>
                            </select>
                        </div>

                        <div>
                            {/* <p className='tex   t-blue-600 font-bold'>Product Sub-Category</p> */}
                            {/* <Controller
                                name="category1"
                                control={control}
                                render={({ field }) => <Select
                                    {...field}
                                    isMulti
                                    options={[
                                        { value: "Classic", label: "Classic" },
                                        { value: "Sport", label: "Sport" },
                                        { value: "Construction", label: "Construction" },
                                        { value: "Emergency", label: "Emergency" },
                                        { value: "Others", label: "Others" }
                                    ]}

                                />}
                            /> */}

                            <div className='flex  items-center gap-5'>
                                <span className='font-bold'>Sub-category:</span>
                                <select {...register("category")}>
                                    <option value="Classic">Classic</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="Others">Others</option>
                                </select>

                            </div>
                        </div>

                        {/* <input type="text" defaultValue="1000tk/per session" {...register("cost", { required: true })} placeholder="Cost" className="lg:w-[500px] ex:w-[500px] w-[300px] block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" /> */}

                    </div>
                </div>
                <input type="submit" className="btn w-6/12 mt-10 " />
            </form>

        </div>
    );
};

export default AddAToy;

