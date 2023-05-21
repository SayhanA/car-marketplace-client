import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [signInError, setSignInError] = useState(null)

    const { signIn, handleGoogleSignIn, handleGitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            handleJwtToken(user, form)
            
            // navigate(from)
            setSignInError({
                error: false,
                message: "Congratulation You are successfully logged in"
            })
            form.reset();

        })
        .catch(error => {
            console.log(error)
            setSignInError({
                error: true,
                message: error.message
            })
        })
    }

    const handlePassword = e => {
        e.preventDefault();
        const password = event.target.value;
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

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
        .then(result => {
            const user = result.user;

            handleJwtToken(user)
            
            // navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGitHubLogin = () => {
        handleGitHubSignIn()
        .then(result => {
            const user = result.user;

            handleJwtToken(user)
            
            // navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }


    const handleJwtToken = user => {
        const loggedUser = {
            email: user.email
        }
        
        fetch('https://b7a11-toy-marketplace-server-side-seven.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("JWT token data" ,data);
            localStorage.setItem('toy-car-token', data.token);
            navigate(from)
        })
    }
     

    return (
        <div className='h-[750px] w-full flex justify-center items-center gap-40 bg-[#FECCFF] '>
            <div className='lg:block hidden'>
                {/* <img src="/public/images/login.png.jpg" alt="" /> */}
            </div>
            <div>
                <div className="sm:w-[500px] bg-white px-10 py-10 rounded-xl">
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        {
                            signInError?.error === false && <p className='text-xl text-green-400 font-bold'>{signInError?.message}</p>
                        }
                        <p className='text-2xl font-bold text-blue-500 text-center'>LogIn</p>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            {
                                show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                            }
                            <input onChange={handlePassword} type={show ? "text" : "password"} name="password" id="password" value={password} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            {error && <p className='text-red-500'>{error}</p>}
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                                Remember me
                            </Label>
                            <Link className='text-red-500 ml-auto font-semibold'>forgotten password</Link>
                        </div>
                        <input className='btn bg-blue-500 text-lg normal-case' type="submit" value="Login" />
                        <p>New to this website? <Link to='/signUp' className='text-blue-500 font-semibold underline'>Sign Up</Link></p>
                        {
                            signInError?.error && <p className='text-xl text-red-500 font-bold'>{signInError?.message}</p>
                        }
                    </form>

                    <div>
                        <div className='flex h-1 items-center mt-10 gap-5'>
                            <div className='w-[50%] border border-gray-500'></div>
                            <span>OR</span>
                            <div className='w-[50%] border border-gray-500'></div>
                        </div>

                        <div onClick={handleGoogleLogin} className='w-11/12 mx-auto border-2 border-gray-400 rounded-full h-[50px] mt-5 flex justify-center items-center font-bold relative'> <img className='w-8 absolute left-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />  Google</div>
                        <div onClick={handleGitHubLogin} className='w-11/12 mx-auto border-2 border-gray-400 rounded-full h-[50px] mt-5 flex justify-center items-center font-bold relative'> <img className='w-9 absolute left-2' src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />  GitHub</div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;