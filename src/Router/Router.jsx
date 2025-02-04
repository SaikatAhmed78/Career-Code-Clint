import {  createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import JobsDetail from "../Components/JobsDetail";
import PrivateRoute from "../Private/PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications";
import PostJob from "../Pages/PostJob";
import MyJobPosts from "../Pages/MyJobPosts";
import NotFoundPage from "../Common/NotFoundPage";
import AllJobs from "../Pages/AllJobs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobsDetail></JobsDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://career-code.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/postJob',
                element: <PrivateRoute><PostJob></PostJob></PrivateRoute>
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/myJobPosts',
                element: <PrivateRoute><MyJobPosts></MyJobPosts></PrivateRoute>
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