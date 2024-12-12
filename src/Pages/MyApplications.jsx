import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import useAuth from '../Hooks/UseAuth';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/job-application/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your job application has been deleted.',
                                'success'
                            );
                            const remainingJobs = jobs.filter(job => job._id !== id);
                            setJobs(remainingJobs);
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">My Job Applications</h1>
            {jobs.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                        <thead>
                            <tr className="bg-purple-600 text-white">
                                <th className="border px-6 py-3 text-left">#</th>
                                <th className="border px-6 py-3 text-left">Job Title</th>
                                <th className="border px-6 py-3 text-left">Company</th>
                                <th className="border px-6 py-3 text-left">Company Logo</th>
                                <th className="border px-6 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="border px-6 py-3 text-center font-medium text-gray-700">{index + 1}</td>
                                    <td className="border px-6 py-3 text-gray-800 font-semibold">{job.title}</td>
                                    <td className="border px-6 py-3 text-gray-800">{job.company}</td>
                                    <td className="border px-6 py-3 text-center">
                                        <img 
                                            src={job.company_logo} 
                                            alt={`${job.company} logo`} 
                                            className="h-12 w-12 mx-auto rounded-full border border-gray-300"
                                        />
                                    </td>
                                    <td className="border px-6 py-3 text-center">
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="text-red-600 hover:text-red-800 transition duration-300"
                                        >
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-700 text-center font-medium">You have not applied to any jobs yet.</p>
            )}
        </div>
    );
};

export default MyApplications;
