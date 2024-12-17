import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';

const MyJobPosts = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/my-jobs?email=${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch jobs data');
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.email]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-700">My Job Posts</h2>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">You have not posted any jobs yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-4 border-b">#</th>
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b">Company</th>
                <th className="p-4 border-b">Location</th>
                <th className="p-4 border-b">Salary Range</th>
                <th className="p-4 border-b">Posted On</th>
                <th className="p-4 border-b">Applications</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className="hover:bg-indigo-50 transition-all duration-300">
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4">{job.title}</td>
                  <td className="p-4">{job.company}</td>
                  <td className="p-4">{job.location}</td>
                  <td className="p-4">{job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</td>
                  <td className="p-4">{new Date(job.applicationDeadline).toLocaleDateString()}</td>
                  <td className="p-4 text-center">{job.applicationCount}</td>
                  <td className="p-4 text-center">
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyJobPosts;
