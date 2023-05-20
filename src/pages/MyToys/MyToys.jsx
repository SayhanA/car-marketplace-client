import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';
import { AuthContext } from '../../provider/AuthProvider';
import { Rating } from '@smastrom/react-rating';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle("MyToys");
    
    const [cars, setCars] = useState([]);
    const { user } = useContext(AuthContext);
    const [id, setId] = useState('');
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars?email=${user.email}&sort=${1}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [user, update])

    const handleId = (id) => {
        // console.log("confirm")
        setId(id)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const info = { title, price, quantity, description }
        // console.log(info);

        fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars/${id}`, {
            method: "PUT",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    setUpdate(!update)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your data is updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = id => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            setUpdate(!update)
                            Swal.fire(
                                'Deleted!',
                                'Your Car Details has been Deleted.',
                                'success'
                              )
                        }
                    })
            }
        })


    }

    return (
        <div>
            <div className='h-[300px] bg-[#292944] px-32 flex justify-center flex-col'>
                <p className='text-white font-bold text-2xl pt-10'>{user?.displayName}</p>
                <p className='text-white font-bold text-xl'>{user?.email}</p>
                <p className='text-white pt-4'><span className='font-bold text-white'>Total Products Catagories: {cars.length} </span></p>
                <p className='text-white'><span className='font-bold text-white'>Total Products : {cars.length * 200}/pieces </span></p>
                
                <img src="https://i.ibb.co/KW48mRp/madel-fotor-bg-remover-2023052016054.png" className='w-40 absolute right-32' alt="" />
                <p>Golden Seller</p>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table lg:w-10/12 mx-auto ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Car</th>
                            <th>Model & serial</th>
                            <th>Color</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cars.map((car, index) => <tr key={index}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask w-48 h-32">
                                                <img src={car.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{car.title}</div>
                                            <div className="text-sm opacity-50"><Rating style={{ maxWidth: 100 }} value={car?.rating} readOnly /></div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-lg font-bold'>
                                    {car?.carModel}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{car?.UPC}</span>
                                </td>
                                <td>{car?.color}</td>
                                <th>

                                    <label onClick={() => handleId(car._id)} htmlFor="my-modal-5" ><p className="btn btn-ghost text-2xl hover:scale-125"><FaPencilAlt /></p></label>


                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-xl text-center">Congratulations random Internet user!</h3>
                                            <p className="py-4 text-center">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                                            <form onSubmit={handleSubmit} className='w-6/12 mx-auto pt-10'>

                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                                                </div>

                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
                                                </div>

                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input type="number" name="quantity" id="quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                                </div>

                                                <div className="relative z-0 w-full mb-6 group">
                                                    <textarea type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
                                                </div>

                                                <input className='btn btn-primary w-full ' type="submit" value="submit" />
                                            </form>

                                            <div className="modal-action absolute top-0 right-0">
                                                <label htmlFor="my-modal-5" className="btn">Yay!</label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(car._id)} className="btn btn-ghost text-2xl text-red-600 hover:scale-125"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>

            </div>
        </div>
    );
};

export default MyToys;