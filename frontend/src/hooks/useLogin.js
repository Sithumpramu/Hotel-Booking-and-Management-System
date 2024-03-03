import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigation = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // Determine the role based on the email or any other criteria
      const role = determineRole(email);

      const response = await fetch(
        role === 'staff'
          ? 'http://localhost:4000/staff/login'
          : 'http://localhost:4000/user/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('email', email);

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: data });

      // Update loading state
      setIsLoading(false);

      // Navigate to the appropriate dashboard
      navigation(determineDashboard(role, email));
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  // Function to determine the role based on email
  const determineRole = (email) => {
    // Example: Check if the email contains the word 'staff' or 'manager'
    if (email.includes('staff')) {
      return 'staff';
    } else if (email.includes('manager')) {
      return 'manager';
    } else {
      return 'user';
    }
  };

  // Function to determine the dashboard based on role and email
  const determineDashboard = (role, email) => {
    // Example: Navigate to 'AdminDashbord' for staff, 'ManagerDashbord' for manager, and default to '/'
    if (role === 'staff') {
      return '/AdminDashbord';
    } else if (role === 'manager') {
      return '/ManagerDashbord';
    } else {
      return '/';
    }
  };

  return { login, isLoading, error };
};