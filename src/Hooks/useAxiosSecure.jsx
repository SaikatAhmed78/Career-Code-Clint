import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
  baseURL: 'https://career-code.vercel.app',
  withCredentials: true,
});

const useAxiosSecure = () => {

  const { signoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          signoutUser()
            .then(() => {
              Swal.fire({
                title: 'Session Expired!',
                text: 'You have been signed out. Please sign in again.',
                icon: 'warning',
                confirmButtonText: 'OK',
              });
              navigate('/signin');
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, signoutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
