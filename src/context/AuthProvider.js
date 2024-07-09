// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from './axiosInstance';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    isAuthenticated: false,
    role: null,
  });

  const checkAuth = async () => {
    try {
      const response = await axiosInstance.post('/auth/isAuthenticated', {}, { withCredentials: true });
      if (response.data.status === "success" && response.data.msg === "true") {
        setAuth({
          user: { email: response.data.data.email !== '' ? response.data.data.email : null, nin: response.data.data.nin !== '' ? response.data.data.nin: null },
          isAuthenticated: true,
          role: response.data.data.role,
        });
      } else {
        setAuth({ user: null, isAuthenticated: false, role: null });
      }
    } catch (error) {
      console.error('Error checking authentication', error);
      setAuth({ user: null, isAuthenticated: false, role: null });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    await axiosInstance.post('/auth/logout', {}, { withCredentials: true });
    setAuth({ user: null, isAuthenticated: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
