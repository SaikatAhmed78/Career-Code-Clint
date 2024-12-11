import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import hiring from '../../src/assets/banner/we-are-hiring-digital-collage.jpg';

const Extra1 = () => {
    const categories = [
        { name: 'Marketing & Sale', jobs: 1526 },
        { name: 'Customer Help', jobs: 185 },
        { name: 'Finance', jobs: 168 },
        { name: 'Software', jobs: 1856 },
        { name: 'Human Resource', jobs: 165 },
        { name: 'Education', jobs: 350 },
        { name: 'Healthcare', jobs: 275 },
        { name: 'Engineering', jobs: 1240 },
    ];

    return (
        <div className="p-5 mt-5">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-600">Browse by Category</h2>
                
                <motion.div
                    className="overflow-hidden"
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="flex space-x-6 py-4">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-indigo-100 p-4 rounded-lg shadow-md flex items-center min-w-[200px]">
                                <FaBriefcase className="text-indigo-600 text-2xl mr-3" />
                                <div>
                                    <h3 className="text-lg font-medium text-indigo-800">{category.name}</h3>
                                    <p className="text-sm text-gray-600">{category.jobs} Jobs Available</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaBriefcase className="text-indigo-600 text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold">{category.name}</h3>
                                <p className="text-gray-600">{category.jobs} Jobs Available</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative bg-indigo-600 text-white p-8 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">WE ARE HIRING</h2>
                        <p className="mt-2 text-sm w-3/4">Join our team and help us achieve great things together!</p>
                        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
                            Apply Now
                        </button>
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-full overflow-hidden">
                        <motion.img
                            src={hiring}
                            className="object-cover rounded-lg"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra1;
