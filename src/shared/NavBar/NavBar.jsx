import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    return (
        <div className='absolute w-full z-50 lg:w-11/12 left-[50%] translate-x-[-50%]'>
            <Navbar style={{background: "transparent"}}
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand className='relative'>
                    <Navbar.Toggle />
                    <img
                        src="/images/car-2.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="font-mono text-2xl self-center whitespace-nowrap font-semibold dark:text-white absolute md:left-14 left-20 text-gray-200">
                        <span className='text-blue-500 '>&</span><span className='text-gray-500'>T</span>o<span className='text-green-400'>y</span>
                    </span>
                </Navbar.Brand>


                <div className="flex md:order-2">

                    <div className="flex-none text-white">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        user ? <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={user?.photoURL ? <Avatar alt="User settings" img={user?.photoURL} rounded={true} title={user?.displayName} />: <FaRegUserCircle className='text-4xl ml-2' />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        
                        {/* <Dropdown.Divider /> */}
                        <Dropdown.Item onClick={logOut}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown> :
                    <Link to='/login' className='btn btn-primary normal-case rounded-md'>Login</Link>
                    }

                </div>
                <Navbar.Collapse className='sm:text-gray-200 px-5 md:bg-transparent bg-white text-black'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                    <ActiveLink to='/myToys'>My Toys</ActiveLink>
                    <ActiveLink to='/addAToy'>Add A Toy</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;