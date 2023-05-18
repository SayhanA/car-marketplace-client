import { Checkbox, Label } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [errorConfirm, setErrorConfirm] = useState(null);
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [errorPage, setErrorPage] = useState(null)
    const { signUp } = useContext(AuthContext);

    const handleSubmit = event => {
        setErrorPage('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name,email,photo, password, confirmPassword)
        if(password === confirmPassword){
            signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setErrorPage(error.message)
            })
        }
        else{
            setErrorPage("Password and confirm password are not same")
        }
    }

    const handlePassword = e => {
        e.preventDefault();
        const password = e.target.value;
        setPassword(password);
        if (password.length === 0) {
            setError("")
        }
        else if (password.length < 6) {
            setError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            setError("Password must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            setError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            setError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("Password must contain al least one special character")
        }
        else {
            setError("");
        }

    }
    const handleConfirmPassword = e => {
        e.preventDefault();
        const confirmPasswords = e.target.value;
        setConfirmPassword(confirmPasswords);
        if (password.length === 0) {
            setErrorConfirm("")
        }
        else if (confirmPasswords.length < 6) {
            setErrorConfirm("confirmPassword must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(confirmPasswords)) {
            setErrorConfirm("confirmPassword must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(confirmPasswords)) {
            setErrorConfirm("confirmPassword must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(confirmPasswords)) {
            setErrorConfirm("confirmPassword must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(confirmPasswords)) {
            setErrorConfirm("confirmPassword must contain al least one special character")
        }
        else {
            setErrorConfirm("");
        }

    }

    const handleGoogleSignIn = () => {
        // googleSignIn()
        // .then(result => {
        //     const user = result.user;
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    return (
        <div className='bg-blue-400 '>
            <div className=''></div>
            <div className='grid lg:grid-cols-2 '>

                <div className='h-[800px] flex lg:justify-end justify-center items-center'>
                    <form onSubmit={handleSubmit} className='lg:w-[450px] md:w-8/12 border w-full rounded-xl sm:m-10 m-2 p-10 bg-[#ffffff30] '>
                        <h3 className='text-xl font-bold pb-5'>Sign Up</h3>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your photo</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            {
                                show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                            }
                            <input onChange={handlePassword} type={show ? "text" : "password"} name="password" id="password" value={password} className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${error ? "focus:border-red-500" : "focus:border-blue-600"} peer`} placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            {error && <p className='text-red-500'>{error}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            {
                                showConfirm ? <FaEye onClick={() => setShowConfirm(!showConfirm)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShowConfirm(!showConfirm)} className='text-gray-500 absolute right-3 top-4' />
                            }
                            <input onChange={handleConfirmPassword} type={showConfirm ? "text" : "password"} name="confirmPassword" id="confirmPassword" value={confirmPassword} className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${errorConfirm ? "focus:border-red-500" : "focus:border-blue-600"} peer`} placeholder=" " required />
                            <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                            {errorConfirm && <p className='text-red-500'>{errorConfirm}</p>}
                        </div>

                        <div className="flex items-center gap-2 mb-5">
                            <Checkbox id="remember" required />
                            <Label htmlFor="remember" >
                                Accept all <Link className='text-gray-500 underline font-bold'>Terms & Conditions</Link>
                            </Label>
                        </div>
                        <input type="submit" value="Sign Up" className='btn btn-primary w-full normal-case' />
                        <p className='text-center'>Already have an Account?<Link to='/login' className='text-gray-600 font-bold underline'>Login</Link></p>
                        <p>{errorPage}</p>
                    </form>
                </div>
                <div className='flex items-center justify-center lg:justify-start  lg:p-20'>

                    <div className='flex flex-col gap-5 px-10 w-full'>
                        <div className='flex items-center gap-5 lg:w-[400px]'>
                            <div className='h-0 w-[50%] border border-gray-500'></div>
                            <span className='text-xl font-bold'>OR</span>
                            <div className='h-0 w-[50%] border border-gray-500'></div>
                        </div>
                        <p className='text-3xl font-bold text-center text-white'>Continue With</p>
                        <div onClick={handleGoogleSignIn} className='relative rounded-full flex justify-center items-center gap-4 border h-[55px] border-gray-500 bg-[#cccccc40] text-white transition-all hover:scale-105'>
                            <img className='absolute left-2 w-9 h-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                            <p className='text-black font-bold text-xl'>Continue With Google</p>
                        </div>
                        <div className='relative rounded-full flex justify-center items-center gap-4 border h-[55px] border-gray-500 bg-[#cccccc40] text-white transition-all hover:scale-105'>
                            <img className='absolute left-2 w-9 h-9' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                            <p className='text-black font-bold text-xl'>Continue With GitHub</p>
                        </div>
                        <div className='relative rounded-full flex justify-center items-center gap-4 border h-[55px] border-gray-500 bg-[#cccccc40] text-white transition-all hover:scale-105'>
                            <img className='absolute left-2 w-10 h-10 rounded-full' src="/public/images/fb.png" alt="" />
                            <p className='text-black font-bold text-xl'>Continue With Facebook</p>
                        </div>
                        <div className='relative rounded-full flex justify-center items-center gap-4 border h-[55px] border-gray-500 bg-[#cccccc40] text-white transition-all hover:scale-105'>
                            <img className='absolute left-2 w-9 h-9' src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png" alt="" />
                            <p className='text-black font-bold text-xl'>Continue With Twitter</p>
                        </div>
                        <div className='relative rounded-full flex justify-center items-center gap-4 border h-[55px] border-gray-500 bg-[#cccccc40] text-white transition-all hover:scale-105'>
                            <img className='absolute left-2 w-9 h-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                            <p className='text-black font-bold text-xl'>Continue With Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;