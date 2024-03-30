import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useAddNew = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate(); 

  const addActivity = async (Activity, Time, Price, Description) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/watersport/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ Activity, Time, Price, Description })
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        navigate('/');
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { addActivity, isLoading, error };
};

export default useAddNew;