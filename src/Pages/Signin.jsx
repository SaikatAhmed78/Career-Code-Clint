import { FaEnvelope, FaLock } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../src/assets/lottie/signin - 1733926268989.json';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import SocialLogin from '../Common/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/'

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire({
        title: 'Error!',
        text: 'All fields are required!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {

        const user = {email: email};
        axios.post('http://localhost:5000/jwt', user)
        .then(data => {
          console.log(data)
        })

        Swal.fire({
          title: 'Success!',
          text: 'Signed in successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        })
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to sign in!',
          icon: 'error',
          confirmButtonText: 'Try Later',
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
            <h2 className="text-3xl font-bold text-indigo-600">Sign In</h2>
            <p className="mt-2 text-sm text-gray-600">Welcome back! Please sign in to your account.</p>
          </div>
          <form onSubmit={handleSignin} className="space-y-6">
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
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
