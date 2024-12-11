import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../src/assets/lottie/register - 1733913622717.json';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;


    if (!name || !email || !password) {
      Swal.fire({
        title: 'Error!',
        text: 'All fields are required!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Invalid Password!',
        text: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    creatUser(email, password)
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Account created successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to create account!',
          icon: 'error',
          confirmButtonText: 'Something Went Wrong',
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full">
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-md"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-600">Sign Up</h2>
            <p className="mt-2 text-sm text-gray-600">Create your account to get started</p>
          </div>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
