import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnimation from "../../src/assets/lottie/error - 1734179813475.json"; 

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="max-w-md w-full text-center p-6">
        <Lottie animationData={errorAnimation} loop={true} className="w-full h-full" />
        <h1 className="text-5xl font-bold text-indigo-600 mt-6">404</h1>
        <p className="text-lg text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
