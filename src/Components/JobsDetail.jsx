import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdWork, MdLocationOn, MdAttachMoney, MdCalendarToday } from 'react-icons/md';

const JobsDetail = () => {
  const job = useLoaderData();

  if (!job) {
    return <div className="text-center text-red-600 font-bold mt-10">Job details not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-white p-8 rounded-lg shadow-xl my-10 transition-all duration-500 hover:shadow-2xl">
      <header className="flex items-center gap-6 border-b pb-6 mb-6">
        <img 
          src={job.companyLogo} 
          alt={job.company} 
          className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-indigo-800 flex items-center gap-3">
            <MdWork className="text-indigo-600" /> {job.title}
          </h1>
          <p className="text-gray-600 text-lg flex items-center gap-2">
            <MdLocationOn className="text-indigo-600" /> {job.company} - {job.location}
          </p>
        </div>
      </header>

      <main className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700">Job Overview</h2>
          <p className="text-gray-700 text-justify leading-relaxed mt-2">{job.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-700">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3">
              <MdCalendarToday className="text-indigo-600 text-xl" />
              <span className="text-gray-700 text-lg"><strong>Application Deadline:</strong> {job.applicationDeadline}</span>
            </div>
            <div className="flex items-center gap-3">
              <MdAttachMoney className="text-indigo-600 text-xl" />
              <span className="text-gray-700 text-lg">
                <strong>Salary:</strong> {job.salaryRange.currency.toUpperCase()} {job.salaryRange.min} - {job.salaryRange.max}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdWork className="text-indigo-600 text-xl" />
              <span className="text-gray-700 text-lg"><strong>Job Type:</strong> {job.jobType}</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-700">Requirements</h2>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            {job.responsibilities?.map((requirement, index) => (
              <li key={index} className="text-gray-700 text-lg">{requirement}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-8 flex justify-center">
      <Link to={`/jobApply/${job._id}`}>
      <button className="bg-indigo-600 text-white font-semibold text-lg py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
          Apply Now
        </button>
      </Link>
      </footer>
    </div>
  );
};

export default JobsDetail;
