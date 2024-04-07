import React, { useState } from 'react';

function Rooms(){
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const handleSubmit = async (e)=>{
        
    }
    return(
        <div className="App">
        <h1>Hotel Booking</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Check-in Date:
            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
          </label>
          <label>
            Check-out Date:
            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
          </label>
          <label>
            Number of People:
            <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    )
}
export default Rooms