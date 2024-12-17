import React from 'react';
import { MdWork, MdLocationOn, MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition duration-300 hover:shadow-2xl hover:scale-105 border border-indigo-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={job?.companyLogo} 
          alt={job?.company} 
          className="w-12 h-12 rounded-full object-cover border border-indigo-600"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <MdWork className="text-indigo-600" /> {job?.title}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <MdLocationOn className="text-indigo-600" /> {job?.company} - {job?.location}
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{job?.description}</p>
      <p className="text-gray-500 text-xs italic mb-4">Type: {job?.jobType}</p>
      <p className="text-gray-500 text-xs mb-4">Application Deadline: {job?.applicationDeadline}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {job?.requirements?.map((requirement, index) => (
          <span 
            key={index} 
            className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded"
          >
            {requirement}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-indigo-600 font-bold text-lg flex items-center gap-1">
          <MdAttachMoney className="text-indigo-600" /> {job?.salaryRange.currency.toUpperCase()} {job?.salaryRange.min} - {job?.salaryRange.max}
        </span>
        
        <Link to={`/jobs/${job?._id}`}>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
         Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
