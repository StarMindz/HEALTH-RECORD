// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import BASE_URL from './baseUrl';
import PropTypes from 'prop-types';
import axios from 'axios';
import axiosInstance from './axiosInstance';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    isAuthenticated: null,
    role: null,
  });

  const checkAuth = async () => {
    try {
      const endPoint = `${BASE_URL}/auth/isAuthenticated`

      const response = await axiosInstance.get("/auth/isAuthenticated");
      console.log("I got to Auth provider")
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

  const logout = async () => {
    await axios.post(`${BASE_URL}/auth/logout`, {},);
    setAuth({ user: null, isAuthenticated: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
