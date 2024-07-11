// src/hooks/useAuth.js
import { useContext, useEffect } from 'react';
import AuthContext from './AuthProvider';

const useAuth = () => {
  const { auth, checkAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      checkAuth();
    }
  }, [auth.isAuthenticated, checkAuth]);

  return auth;
};

export default useAuth;
