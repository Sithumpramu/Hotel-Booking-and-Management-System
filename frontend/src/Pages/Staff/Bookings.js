import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';
function Bookings() {
    return (
        <div>
            <ManagerPanel/>
            <h2>Bookings</h2>
            <div className="card">
                {}
                <div className="booking">
                    <p>Room Type: </p>
                    <p>Booking ID: </p>
                    <p>Check-in: </p>
                    <p>Check-out: </p>
                    <p>Amount: </p>
                    <p>Status: </p>

                </div>
            </div>

            <div className="card">
                {}
                <div className="booking">
                    <p>Room Type: </p>
                    <p>Booking ID: </p>
                    <p>Check-in: </p>
                    <p>Check-out: </p>
                    <p>Amount: </p>
                    <p>Status: </p>

                </div>
            </div>
        </div>
    );
}

export default Bookings;
