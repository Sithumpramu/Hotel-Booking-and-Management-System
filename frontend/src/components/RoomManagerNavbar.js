import React from 'react';

function ManagerPanel() {
    return (
        <div>
            <nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li style={{ float: 'left' }}>
                        <a href="frontend/src/components/Profile.js" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }}>Profile</a>
                    </li>
                    <li style={{ float: 'left' }}>
                        <a href="frontend/src/components/Bookings.js" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }}>Bookings</a>
                    </li>
                    <li style={{ float: 'left' }}>
                        <a href="#" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }}>Add Room</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ManagerPanel;
