import React, { useState } from 'react';
import useJobs from '../Hooks/useJobs';
import HotJobsCard from '../Components/HotJobsCard';
import { ClipLoader } from 'react-spinners';
import { FaSearch } from 'react-icons/fa';
import { MdSort } from 'react-icons/md';

const AllJobs = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState('');
    const { jobs, loading } = useJobs(sort, search);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>

            <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <FaSearch className="text-xl text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search by Job Title"
                        value={search}
                        onChange={handleSearch}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <button 
                    onClick={() => setSort(!sort)} 
                    className={`btn ${sort ? 'btn-success' : 'btn-neutral'} flex items-center space-x-2`}
                >
                    <MdSort className="text-xl" />
                    <span>{sort ? 'Sorted by Salary' : 'Sort by Salary'}</span>
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader size={50} color={"#123abc"} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs?.map((job) => (
                        <HotJobsCard key={job._id} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllJobs;
