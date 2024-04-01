import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddReserv = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addReserv = async (
    CusName,
    TelNo,
    Address,
    checkinTime,
    AdvancePayment,
    activityIds
  ) => {
    const reservationDetails = {
      CusName,
      TelNo,
      Address,
      checkinTime,
      AdvancePayment,
      activityIds,
    };

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:4000/watersportReservation/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reservationDetails),
        }
      );

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        navigate("/WatersportsReservation");
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
