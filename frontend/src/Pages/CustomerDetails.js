import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAddRoomReserve from '../hooks/useAddRoomReserve';


function ReservationDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { Rid, Checkindate, Checkoutdate, NoOfGuests,price } = location.state;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [phoneno, setphoneno] = useState('');
    const { addRoomReserve, isLoading, error } = useAddRoomReserve();

    console.log('Check-in Date:', Checkindate);
    console.log('Check-out Date:', Checkoutdate);
    console.log('Number of Guests:', NoOfGuests);
    console.log(' id:', Rid);
    console.log('price:', price);

    const handleSubmit = () => {

        console.log('Submitting reservation details:', { Checkindate, Checkoutdate, NoOfGuests, firstName, lastName, Email });

        addRoomReserve(Checkindate, Checkoutdate, NoOfGuests,Rid, firstName, lastName, Email, Address, phoneno,price);
    };

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: "url(frontend/public/kal.jpg)" }}>
            <div className="card" style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", width: "600px", textAlign: "center" }}>
                <h1>Enter Customer Details</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                    
                    <p>Room:</p>
                    <p>Check-in Date: {Checkindate}</p>
                    <p>Check-out Date: {Checkoutdate}</p>
                    <p>Number of Guests: {NoOfGuests}</p>
                    <label style={{ marginBottom: "10px" }}>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ padding: "8px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", flex: "1" }} />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ padding: "8px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", flex: "1" }} />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                        Email:
                        <input type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "8px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", flex: "1" }} />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                        Address:
                        <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} style={{ padding: "8px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", flex: "1" }} />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                        Phone Number:
                        <input type="tel" value={phoneno} onChange={(e) => setphoneno(e.target.value)} style={{ padding: "8px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", flex: "1" }} />
                    </label>
                    <button type="submit" onClick={handleSubmit} style={{ backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s ease", width: "100%" }}>Submit</button>
                </form>
            </div>
        </div>

    );
}

export default ReservationDetails;
