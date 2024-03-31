import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddReserv = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addReserv = async (CusName, TelNo,Address,ActivityName,checkinTime,AdvancePayment) => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch('http://localhost:4000/WatersportReservation/add', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ CusName, TelNo,Address,ActivityName,checkinTime,AdvancePayment})
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
  
    return { addReserv, isLoading, error };
  };
  
  export default useAddReserv;