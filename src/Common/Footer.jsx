import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import flogo from '../../src/assets/logo/download.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src={flogo} className="h-12 w-12 rounded-full" alt="Logo" />
              <h2 className="text-4xl font-bold">CareerCode</h2>
            </div>
            <p className="text-lg mb-4">Connecting you to your dream job with ease.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="#jobs" className="hover:text-gray-300 transition duration-300">All Jobs</a></li>
              <li><a href="#about" className="hover:text-gray-300 transition duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">saikat@jobportal.com</p>
            <p className="mb-2">+880 1303390718</p>
            <p className="mb-2">123, Shapla Street, Rangpure, Bangladesh</p>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-8 pt-6">
          <p className="text-center text-sm">&copy; 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
