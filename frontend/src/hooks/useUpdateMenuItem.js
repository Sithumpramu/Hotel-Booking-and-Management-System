import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useUpdateMenu = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateMenuItem = async (
    id,
    Date,
    Name,
    Capacity,
    email,
    contactNumber
  ) => {
    console.log("updateMenuItem");

    const menuItemDetails = {
      Date,
      Name,
      Capacity,
      email,
      contactNumber,
    };

    setIsLoading(true);
    setError(null);
    window.location.reload();

    try {
      const response = await fetch(`http://localhost:4000/menu/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateMenuItem),
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        navigate("/TableReservations");
        alert("Reservation details successfully!");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { updateMenuItem, isLoading, error };
};

export default useUpdateMenu;
