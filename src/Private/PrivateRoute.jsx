import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import AuthContext from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color={"#4A90E2"} loading={loading} size={150} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={location?.pathname} />;
};

export default PrivateRoute;
