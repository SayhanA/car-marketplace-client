import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";
import Error from "../pages/ErrorPage/Error";
import LogIn from "../pages/LogIn/LogIn";
import PrivateRouter from "./PrivateRouter";
import Car from "../pages/Car/Car";
import SignUp from "../pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,     
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars'),
            },
            {
                path: 'allToys',
                element: <AllToys />,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/cars')
            },
            {
                path: 'myToys',
                element: <PrivateRouter><MyToys /></PrivateRouter>,
            },
            {
                path: 'addAToy',
                element: <PrivateRouter><AddAToy /></PrivateRouter>
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'car/:id',
                element: <PrivateRouter><Car /></PrivateRouter>,
                loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-sayhana.vercel.app/car/${params.id}`)
            }
        ]
    }
])

export default router;