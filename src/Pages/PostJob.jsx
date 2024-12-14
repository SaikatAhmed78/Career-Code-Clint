import React from "react";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import postJobAnimation from "../../src/assets/lottie/post-job - 1734029370873.json";
import { FiBriefcase, FiMapPin, FiDollarSign, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  
  const navigate = useNavigate();

  const handlePostJob = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
  
    const { title, company, location, jobType, jobField, minSalary, maxSalary, description, responsibilities, hrName, hrEmail, applicationDeadline } = initialData;
  
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !jobField ||
      !minSalary ||
      !maxSalary ||
      !description ||
      !responsibilities ||
      !hrName ||
      !hrEmail ||
      !applicationDeadline
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required. Please fill out the form properly.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
  
    const { currency, ...newJob } = initialData;
  
    const jobData = {
      ...newJob,
      salaryRange: {
        min: minSalary,
        max: maxSalary,
        currency,
      },
      description: description.split("\n").map((item) => item.trim()),
      responsibilities: responsibilities.split("\n").map((item) => item.trim()),
      applicationDeadline,
    };
  
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Job has been posted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate('/MyJobPosts')
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to post job. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        <Lottie animationData={postJobAnimation} loop={true} className="opacity-40" />
      </div>

      <div className="relative w-full max-w-4xl p-10 rounded-3xl shadow-xl border border-gray-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600">Post a Job</h2>
          <p className="text-gray-600 mt-2">Fill out the details to post your job listing.</p>
        </div>

        <form onSubmit={handlePostJob} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[{ id: "title", placeholder: "Job Title", icon: <FiBriefcase /> },
            { id: "company", placeholder: "Company Name", icon: <FiBriefcase /> },
            { id: "location", placeholder: "Location", icon: <FiMapPin /> },
          ].map(({ id, placeholder, icon }) => (
            <div key={id} className="relative col-span-1">
              <span className="absolute left-3 top-3 text-indigo-500 text-lg">{icon}</span>
              <input
                id={id}
                name={id}
                type="text"
                placeholder={placeholder}
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}

          <div className="relative col-span-1">
            <select
              id="jobType"
              name="jobType"
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="relative col-span-1">
            <select
              id="jobField"
              name="jobField"
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Job Field</option>
              <option value="Software Development">Software Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Sales">Sales</option>
              <option value="Customer Service">Customer Service</option>
            </select>
          </div>

          <div className="relative col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["minSalary", "maxSalary"].map((id, index) => (
                <div key={id} className="relative">
                  <span className="absolute left-3 top-3 text-indigo-500 text-lg">
                    <FiDollarSign />
                  </span>
                  <input
                    id={id}
                    name={id}
                    type="number"
                    placeholder={index === 0 ? "Min Salary" : "Max Salary"}
                    className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
              <select
                id="currency"
                name="currency"
                className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>

          <div className="relative col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-indigo-500 text-lg">
                <FiCalendar />
              </span>
              <input
                id="applicationDeadline"
                name="applicationDeadline"
                type="date"
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="relative col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Requirements</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Put each requirement in a new line..."
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="relative col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows="4"
              placeholder="Add each responsibility in a new line..."
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="relative col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">HR Name</label>
            <input
              id="hrName"
              name="hrName"
              type="text"
              placeholder="HR Name"
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">HR Email</label>
            <input
              id="hrEmail"
              name="hrEmail"
              type="email"
              placeholder="HR Email"
              className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
