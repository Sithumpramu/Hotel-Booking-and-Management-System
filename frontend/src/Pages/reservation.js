import React, { useState } from 'react';
//import './Rooms.css'; // Import your CSS file for styling

function Rooms() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div className="background">
            <div className="card">
                
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
                   
                </form>
                <button type="submit">Book Now</button>
            </div>
        </div>
    )
}

export default Rooms;
