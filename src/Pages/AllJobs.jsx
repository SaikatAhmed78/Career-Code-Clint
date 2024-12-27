import React from 'react';
import useJobs from '../Hooks/useJobs';
import HotJobsCard from '../Components/HotJobsCard';
import { ClipLoader } from 'react-spinners';

const AllJobs = () => {
    const { jobs, loading } = useJobs();

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>

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
