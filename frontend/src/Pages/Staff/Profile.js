import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';
function Profile() {
    return (
        <div>
            <ManagerPanel/>
            <h2>Profile</h2>
            <p>Name: Your Name</p>
            <p>Email: your.email@example.com</p>
        </div>
    );
}

export default Profile;
