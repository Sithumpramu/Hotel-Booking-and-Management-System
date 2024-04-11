import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckinForm() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
    // Pass data to rooms page
    navigate('/rooms', {
      state: {
        checkinDate,
        checkoutDate,
        guests
      }
    });
  };

  return (
    <div>
      <h2>Enter Reservation Details</h2>
      <label>Check-in Date:</label>
      <input type="date" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} /><br />
      <label>Check-out Date:</label>
      <input type="date" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} /><br />
      <label>Number of Guests:</label>
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} /><br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default CheckinForm;
