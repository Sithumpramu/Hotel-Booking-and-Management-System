
import React, { useState } from "react";
import RoomList from "../hooks/useRoomList";


function Room() {
    const { rooms } = RoomList();

    return (
        <div>
            <div className='row bs' >
                {rooms.map((rooms) => (
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{rooms.Rid}</p>
                                <p className="card-text">{rooms.Rtype}</p>
                                <p className="card-text">{rooms.description}</p>
                                <p className="card-text">{rooms.capacity}</p>
                                <p className="card-text">{rooms.NoOfBeds}</p>
                                <p className="card-text">{rooms.price}</p>
                                <p className="card-text">{rooms.status}</p>

                                <div style={{ float: 'right' }}>
                                    <button className="btn1">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Room;
