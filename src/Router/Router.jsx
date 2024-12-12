import {  createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import JobsDetail from "../Components/JobsDetail";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobsDetail></JobsDetail></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
        ]
    }
])

export default router;