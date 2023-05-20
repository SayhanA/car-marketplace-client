import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaSearch, FaSearchPlus } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';

const Search = () => {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [res, setRes] = useState([]);

    const { carSearch, handleOrder, order } = useContext(AuthContext);

    const handleSearch = event => {
        setShow(true);
        event.preventDefault();
        const text = event.target.value;
        setText(text);
    }

    // console.log(typeof text)

    useEffect(() => {
        if (text == "") {
            // console.log("search text")
        }
        else {
            fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/search/${text}`)
                .then(res => res.json())
                .then(data => {
                    setRes(data)
                })
        }
    }, [text])

    const handleSubmit = e => {
        setShow(false)
        e.preventDefault();
    }

    const handleOnClick = (event) => {
        setShow(true);
    }

    const handleOnKeyDown = (e) => {
        setShow(true);
        if (e.code === "Enter") {
            console.log(e.target.value);
            carSearch(res);
            // e.target.value = ""
            setText('')
            setShow(false)
        }
    }

    return (
        <div>
            <div className='bg-[#292944] h-[250px] flex justify-end items-center'>
                <p className='text-white text-4xl font-bold  ml-32'>Car&Toy</p>

                <div onClick={handleOrder} className='mr-auto ml-10'>
                    {
                        order === 1 ? <button className='btn normal-case rounded-md px-9 text-[17px]'>Descending</button> : <button className='btn normal-case rounded-md px-9 text-[17px]'>Ascending</button>
                    }
                </div>

                <form onSubmit={handleSubmit} className="flex items-center w-6/12 pr-20">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input onKeyDown={handleOnKeyDown} onChange={handleSearch} type="text" name='search' value={text} id="voice-search" className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for you desire toy . . ." required />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                        </button>
                        <div onClick={handleOnClick} className={`text-white absolute top-10 z-50  bg-[#ffffff] rounded-lg w-full ${show ? "" : 'hidden'} `}>
                            {
                                res.map((data, index) => <p onClick={() => setText(data.title)} className='pl-10 p-2 border-b-2 text-black flex items-center gap-5' key={index}>
                                    <FaSearch className='text-gray-400' /> {data.title}
                                </p>)

                            }
                        </div>

                    </div>
                    <button onClick={() => carSearch(res)} type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;