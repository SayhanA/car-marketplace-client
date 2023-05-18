import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/cars'),
            },
            {
                path: 'allToys',
                element: <AllToys />
            },
            {
                path: 'myToys',
                element: <MyToys />
            },
            {
                path: 'addAToy',
                element: <AddAToy />
            },
            {
                path: 'blogs',
                element: <Blogs />
            }
        ]
    }
])

export default router;