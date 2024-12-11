import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaBriefcase, FaPlusCircle, FaListAlt, FaUserCircle } from 'react-icons/fa';
import logo from '../../src/assets/logo/a logo for a job portal system.png';

const Navbar = () => {

    const links = (
        <>
            <li><Link to="/jobs" className="flex items-center space-x-2"><FaBriefcase /><span>Jobs</span></Link></li>
            <li><Link to="/add-jobs" className="flex items-center space-x-2"><FaPlusCircle /><span>Post a Job</span></Link></li>
            <li><Link to="/application/me" className="flex items-center space-x-2"><FaListAlt /><span>My Applications</span></Link></li>
            <li><Link to="/my-jobs" className="flex items-center space-x-2"><FaUserCircle /><span>My Job Posts</span></Link></li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-blue-600 bg-opacity-90 p-2 shadow-lg text-white">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center space-x-2 btn btn-ghost normal-case text-2xl font-bold">
                    <img src={logo} alt="CareerCode Logo" className="w-10 h-10 rounded-full" />
                    <span className="hidden lg:inline-flex text-3xl font-extrabold tracking-tight">Career<span className="text-yellow-300">Code</span></span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link to="/register" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 flex items-center space-x-2">
                    <FaUserPlus />
                    <span>Register</span>
                </Link>
                <Link to="/signin" className="btn bg-white text-blue-600 hover:bg-gray-200 flex items-center space-x-2">
                    <FaSignInAlt />
                    <span>Sign In</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
