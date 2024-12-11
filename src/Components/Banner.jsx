import React from 'react';
import { motion } from 'framer-motion';
import team1 from '../../src/assets/banner/portrait-business-executives-raising-arms.jpg';
import team2 from '../../src/assets/banner/smiling-colleagues-office-talking.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center text-[#05264e]">
      <div className="hero-content flex-col lg:flex-row-reverse items-center container mx-auto">

        <div className="flex-1 flex flex-col items-center space-y-8">
          <motion.img
            src={team1}
            className="w-64 lg:w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-300"
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.img
            src={team2}
            className="w-64 lg:w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-purple-500 shadow-lg hover:scale-110 transition-transform duration-300"
            animate={{ x: [20, 150, 100] }}
            transition={{ duration: 8, delay: 5, repeat: Infinity }}
          />
        </div>


        <div className="flex-1 text-center lg:text-left lg:ml-10">
          <motion.h1
            className="text-4xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              The Easiest Way
            </span>
            <br />
            to Get Your New Job
          </motion.h1>
          <motion.p
            className="py-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Join millions of job seekers and make your career dreams come true. Find the best
            opportunities tailored just for you.
          </motion.p>

     
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
          >
            <input
              type="text"
              placeholder="Industry"
              className="input input-bordered w-full py-3 px-5 border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-lg shadow-md transition duration-300"
            />
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full py-3 px-5 border-purple-500 focus:ring-2 focus:ring-purple-500 rounded-lg shadow-md transition duration-300"
            />
            <input
              type="text"
              placeholder="Keywords"
              className="input input-bordered w-full py-3 px-5 border-green-500 focus:ring-2 focus:ring-green-500 rounded-lg shadow-md transition duration-300"
            />
            <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
              Search
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-sm lg:text-lg text-gray-500">Popular Searches:</p>
            <div className="flex flex-wrap justify-center lg:justify-start mt-2 space-x-3">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Designer</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Web Developer</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">iOS Developer</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Full Stack</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Project Manager</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Marketing</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Engineer</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
