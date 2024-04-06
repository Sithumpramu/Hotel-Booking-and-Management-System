import React, { useState } from 'react';


function Rooms() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="background vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage:'url("katha.jpg")'}}>
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
