import React from 'react';

function MyBookings() {
    return (
        <div>
            <h2>My Bookings</h2>
        <div className="card">
            
            {/* List of bookings */}
            <div className="booking">
                <p>Room Type: </p>
                <p>Booking ID: </p>
                <p>Check-in: </p>
                <p>Check-out: </p>
                <p>Amount: </p>
                <p>Status: </p>
                <button>Cancel</button>
            </div>
        </div>

    </div>
    );
}

export default MyBookings;
