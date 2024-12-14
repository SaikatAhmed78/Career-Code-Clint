import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';

const MyJobPosts = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        My Job Posts
      </h2>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">You have not posted any jobs yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-indigo-600">
                <th>#</th>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Posted On</th>
                <th>My Application Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <td>{index + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>{job.applicationCount}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>${job.salary}</td>
                  <td>{new Date(job.date).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
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
