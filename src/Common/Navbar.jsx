import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaSignInAlt,
  FaUserPlus,
  FaBriefcase,
  FaPlusCircle,
  FaListAlt,
  FaUserCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '../../src/assets/logo/a logo for a job portal system.png';
import AuthContext from '../Contexts/AuthContext';

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signoutUser();
      console.log('Sign out successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? 'text-yellow-300 flex items-center space-x-2' : 'flex items-center space-x-2 hover:text-yellow-300 transition duration-300'
          }
        >
          <FaBriefcase />
          <span>Jobs</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-jobs"
          className={({ isActive }) =>
            isActive ? 'text-yellow-300 flex items-center space-x-2' : 'flex items-center space-x-2 hover:text-yellow-300 transition duration-300'
          }
        >
          <FaPlusCircle />
          <span>Post a Job</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/application/me"
          className={({ isActive }) =>
            isActive ? 'text-yellow-300 flex items-center space-x-2' : 'flex items-center space-x-2 hover:text-yellow-300 transition duration-300'
          }
        >
          <FaListAlt />
          <span>My Applications</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-jobs"
          className={({ isActive }) =>
            isActive ? 'text-yellow-300 flex items-center space-x-2' : 'flex items-center space-x-2 hover:text-yellow-300 transition duration-300'
          }
        >
          <FaUserCircle />
          <span>My Job Posts</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-blue-600 bg-opacity-90 p-2 shadow-lg text-white"
          >
            {links}
          </ul>
        </div>
        <NavLink
          to="/"
          className="flex items-center space-x-2 btn btn-ghost normal-case text-2xl font-bold"
        >
          <img src={logo} alt="CareerCode Logo" className="w-10 h-10 rounded-full" />
          <span className="hidden lg:inline-flex text-3xl font-extrabold tracking-tight">
            Career<span className="text-yellow-300">Code</span>
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-white text-blue-600 hover:bg-gray-200 flex items-center space-x-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 flex items-center space-x-2' : 'btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 flex items-center space-x-2'
              }
            >
              <FaUserPlus />
              <span>Register</span>
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 flex items-center space-x-2' : 'btn bg-white text-blue-600 hover:bg-gray-200 flex items-center space-x-2'
              }
            >
              <FaSignInAlt />
              <span>Sign In</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
