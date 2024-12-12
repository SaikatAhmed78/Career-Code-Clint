import React from "react";
import Lottie from "lottie-react";
import postJobAnimation from "../../src/assets/lottie/post-job - 1734029370873.json";
import { FiBriefcase, FiMapPin, FiDollarSign, FiEdit3 } from "react-icons/fi";

const PostJob = () => {
  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const company = form.company.value;
    const location = form.location.value;
    const jobType = form.jobType.value;
    const description = form.description.value;
    const salaryRange = form.salaryRange.value;

    const jobData = {
      title,
      company,
      location,
      jobType,
      description,
      salaryRange,
    };

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        <Lottie animationData={postJobAnimation} loop={true} className="opacity-40" />
      </div>

      <div className="relative w-full max-w-4xl p-10 rounded-3xl shadow-xl border border-gray-300 z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-600">Post a Job</h2>
          <p className="text-gray-600 mt-2">
            Make your job listing stand out with advanced details.
          </p>
        </div>

        <form onSubmit={handlePostJob} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { id: "title", placeholder: "Job Title", icon: <FiBriefcase /> },
            { id: "company", placeholder: "Company Name", icon: <FiBriefcase /> },
            { id: "location", placeholder: "Location", icon: <FiMapPin /> },
            { id: "salaryRange", placeholder: "Salary Range", icon: <FiDollarSign /> },
          ].map(({ id, placeholder, icon }) => (
            <div key={id} className="relative col-span-1">
              <span className="absolute left-4 top-4 text-indigo-400">{icon}</span>
              <input
                id={id}
                name={id}
                type="text"
                placeholder={placeholder}
                className="w-full py-4 pl-12 pr-4 text-gray-800 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 border border-gray-300 focus:border-transparent transition duration-300"
              />
            </div>
          ))}

          <div className="relative col-span-1">
            <span className="absolute left-4 top-4 text-indigo-400">
              <FiEdit3 />
            </span>
            <select
              id="jobType"
              name="jobType"
              className="w-full py-4 pl-12 pr-4 text-gray-800 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 border border-gray-300 focus:border-transparent transition duration-300"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="relative col-span-2">
            <span className="absolute left-4 top-4 text-indigo-400">
              <FiEdit3 />
            </span>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Job Description"
              className="w-full py-4 pl-12 pr-4 text-gray-800 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 border border-gray-300 focus:border-transparent transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="col-span-2 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-500 transition duration-300"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
