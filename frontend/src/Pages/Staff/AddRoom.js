import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';

function AddRoom() {
    return (
        <div>
            <ManagerPanel/>
             <h2>Add Room</h2>
       
        <div className="card">
            
            {}
            <form>
                <label>
                    Room Type:
                    <input type="text" />
                </label>

                <label>
                    Room ID:
                    <input type="text" />
                </label>

                <label>
                    Description:
                    <input type="text" />
                </label>

                <label>
                    Capacity:
                    <input type="text" />
                </label>

                <label>
                    No of Beds:
                    <input type="text" />
                </label>
                
                <label>
                    Price:
                    <input type="text" />
                </label>
                <button type="submit">Add Room</button>
            </form>
        </div>
    </div>
    );
}

export default AddRoom;
