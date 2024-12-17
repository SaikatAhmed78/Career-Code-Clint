import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://career-code.vercel.app/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="mt-5 p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">Jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
