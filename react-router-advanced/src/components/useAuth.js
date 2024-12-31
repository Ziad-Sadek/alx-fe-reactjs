import { useState } from 'react';

// Simulate a simple authentication check
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login (you can modify this logic)
  const login = () => setIsAuthenticated(true);

  // Function to simulate logout (you can modify this logic)
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout
  };
}

export default useAuth;
