import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Use the useAuth hook to check authentication status

  // If the user is not authenticated, redirect to home page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, allow access to the protected route
  return children;
}

export default ProtectedRoute;
