import React from 'react';
//import { Link } from 'react-router-dom'; 

function AdminPanel() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="frontend/src/components/Profile.js">Profile</a></li>
                    <li><a href="frontend/src/components/Bookings.js">Bookings</a></li>
                    <li><a href="#">Add Room</a></li>
                </ul>
            </nav>
            {/* Add your profile, bookings, and add room components here */}
        </div>
    );
}

export default AdminPanel;