import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const REFRESH_ENDPOINT = 'https://tech-maverics.onrender.com/auth/refresh';

const decodeBase64Url = (base64Url) => {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Fix URL encoding
  const decoded = atob(base64); // Decode base64
  return JSON.parse(decoded); // Parse JSON data from the token payload
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);

  const refreshAccessToken = async () => {
    try {
      const refreshToken = cookies.refresh_token;
      const response = await axios.post(REFRESH_ENDPOINT, { refresh_token: refreshToken });
      const newAccessToken = response.data.access_token;

      const accessExpiry = 2 * 60 * 60; // 2 hours in seconds

      const accessExpiryDate = new Date(Date.now() + accessExpiry * 1000);
      // Set access token cookie
      setCookie('access_token', newAccessToken, {
        expires: accessExpiryDate,
        secure: true,
        httpOnly: true,
        sameSite: 'Strict',
      });

      // Update user data with the new access token
      const decodedToken = decodeBase64Url(newAccessToken.split('.')[1]);
      console.log('Decoded token', decodedToken);
      setUser({
        accessToken: newAccessToken,
        role: decodedToken.role, // Extract user role from token
      });

      // Update Axios default headers with the new token
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
    } catch (error) {
      // Handle token refresh error or redirect to login
      console.error('Token refresh error:', error);
      // Redirect to sign-in as needed
      window.location.href = '/signin';
    }
  };

  useEffect(() => {
    // Implement logic to check if the user is authenticated (e.g., from cookies, local storage)
    const checkAuth = async () => {
      // Retrieve the access token
      const accessToken = cookies.access_token;
      console.log('Hello', accessToken);

      if (accessToken) {
        // Set user data if authenticated
        const decodedToken = decodeBase64Url(accessToken.split('.')[1]);
        console.log('Decoded token', decodedToken);
        setUser({
          accessToken,
          role: decodedToken.role, // Extract user role from token
        });
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      } else if (!window.location.href.includes('/signin')) {
        window.location.href = '/signin';
      }
      setLoading(false);
    };

    checkAuth();
  }, [cookies.access_token]); // Add cookies.access_token to dependencies

  const logout = () => {
    // Clear user data from storage (cookies/local storage)
    removeCookie('access_token', { path: '/' });
    removeCookie('refresh_token', { path: '/' });
    setUser(null);
  };

  const authContextValue = {
    user,
    loading,
    logout,
    refreshAccessToken,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
