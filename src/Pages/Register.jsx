import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../src/assets/lottie/register - 1733913622717.json'; 

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
                <div className="hidden md:flex md:w-1/2 items-center justify-center p-4 bg-gray-200">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-full h-full max-w-md max-h-96"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-indigo-600">Sign Up</h2>
                        <p className="mt-2 text-sm text-gray-600">Create your account to get started</p>
                    </div>
                    <form className="mt-8 space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            />
                        </div>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            />
                        </div>
                        <div className="relative">
                            <FaImage className="absolute left-3 top-3 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Photo URL" 
                                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
