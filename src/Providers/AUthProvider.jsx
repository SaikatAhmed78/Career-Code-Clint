import React, { useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import auth from '../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import axios from 'axios';


// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signinWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
  

      if(currentUser?.email){
        const user = {email: currentUser.email};

        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => {
          setLoading(false);
        })
      }
      else{
        axios.post('http://localhost:5000/logout', {}, {
          withCredentials: true
        })
        .then(res => {
          console.log('logout token', res.data)
          setLoading(false);
        })
   
      }

    });
    return () => {
      unSubscribe();
    };
  }, []);


// Authentication Information
  const authInfo = {
    user,
    loading,
    creatUser,
    signInUser,
    signinWithGoogle,
    signinWithGithub,
    signoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
