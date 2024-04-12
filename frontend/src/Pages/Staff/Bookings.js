import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';
function Bookings() {
    return (
        <div>
            <ManagerPanel />
            <h2>Bookings</h2>
            <div className="card" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", margin: "20px auto", width: "80%" }}>
                <div className="booking" style={{ borderBottom: "1px solid #ccc", paddingBottom: "20px", marginBottom: "20px" }}>
                    <p>Room Type: </p>
                    <p>Booking ID: </p>
                    <p>Check-in: </p>
                    <p>Check-out: </p>
                    <p>Amount: </p>
                    <p>Status: </p>
                </div>
            </div>

            <div className="card" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", margin: "20px auto", width: "80%" }}>
                <div className="booking" style={{ borderBottom: "1px solid #ccc", paddingBottom: "20px", marginBottom: "20px" }}>
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
