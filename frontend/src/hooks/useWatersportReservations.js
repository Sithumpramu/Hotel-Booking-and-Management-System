
import { useState, useEffect } from 'react';

const useWatersportReservation = () => {
  const [reservationList, setreservationList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResrvations = async () => {
      setIsLoading(true);
      try {
        // Fetch reservation list
        const reservationResponse = await fetch('http://localhost:4000/watersportReservation/');
        if (!reservationResponse.ok) {
          throw new Error('Failed to fetch watersport reservations');
        }
        const reservationData = await reservationResponse.json();
        setreservationList(reservationData);
 
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResrvations();
  }, []);

  return { reservationList, isLoading, error };
};

export default useWatersportReservation;