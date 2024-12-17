import React from "react";
import Swal from "sweetalert2";
import jobAnimation from "../../src/assets/lottie/apply - 1734000882824.json";
import Lottie from "lottie-react";
import { FiUser, FiMail, FiPhone, FiLinkedin, FiGithub, FiPaperclip, FiMessageSquare } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resumeUrl = form.resumeUrl.value;
    const coverLetter = form.coverLetter.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      name,
      phone,
      linkedin,
      github,
      resumeUrl,
      coverLetter,
    };

    fetch("https://career-code.vercel.app/job-applications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: "Success!",
            text: "Your application has been submitted successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate('/myApplications')
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Lottie animationData={jobAnimation} loop={true} className="w-full h-full" />
      </div>
      <div className="relative max-w-3xl w-full p-8 rounded-lg shadow-2xl z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Apply for the Job</h2>
          <p className="text-sm text-gray-500">Complete the form to submit your application.</p>
        </div>
        <form onSubmit={handleApply} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: "name", type: "text", placeholder: "Full Name", icon: <FiUser /> },
              { id: "email", type: "email", placeholder: "Email Address", icon: <FiMail /> },
              { id: "phone", type: "tel", placeholder: "Phone Number", icon: <FiPhone /> },
              { id: "linkedin", type: "url", placeholder: "LinkedIn Profile", icon: <FiLinkedin /> },
              { id: "github", type: "url", placeholder: "GitHub Profile", icon: <FiGithub /> },
              { id: "resumeUrl", type: "url", placeholder: "Resume URL", icon: <FiPaperclip /> },
            ].map(({ id, type, placeholder, icon }) => (
              <div key={id} className="relative">
                <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
                <input
                  id={id}
                  name={id}
                  type={type}
                  className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 bg-gray-100 focus:bg-white transition duration-300"
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><FiMessageSquare /></span>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 bg-gray-100 focus:bg-white transition duration-300"
              placeholder="Cover Letter"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
