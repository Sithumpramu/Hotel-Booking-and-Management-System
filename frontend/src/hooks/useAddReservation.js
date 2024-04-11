import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddReservation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const useAddResev = async (
    Date,
    Name,
    Capacity,
    email,
    ContactNumber
  ) => {
    const reservDetails = {
        Date,
        Name,
        Capacity,
        email,
        ContactNumber
    };

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:4000/table/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reservDetails),
        }
      );

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        navigate("/AddReservations");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return {useAddResev, isLoading, error };
};

export default useAddReservation;