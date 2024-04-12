import React, { useState } from "react";
import RoomList from "../hooks/useRoomList";
import { useLocation, useNavigate } from 'react-router-dom';

function Room() {
  const { rooms } = RoomList();
  const location = useLocation();
  const navigate = useNavigate();
  const { Checkindate, Checkoutdate, NoOfGuests } = location.state;

  console.log('Check-in Date:', Checkoutdate);
  console.log('Check-out Date:', Checkindate);
  console.log('Number of Guests:', NoOfGuests);

  const handleRoomSelect = (Rid) => {
  navigate('/CustomerDetails', {
    state: {
      Rid,
      Checkoutdate,
      Checkindate,
      NoOfGuests
    }
  })

  return (
    <div>
      <div className="row" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "20px", borderRadius: "5px", padding: "20px" }}>
        {rooms.map((rooms) => (
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                {rooms.Image && rooms.Image.data && (
                  <img
                    style={{ width: "10rem" }}
                    src={`data:${rooms.Image.contentType};base64,${btoa(
                      String.fromCharCode.apply(null, rooms.Image.data.data)
                    )}`}
                    className="card-img-top mb-1"
                    alt={rooms.Rtype}
                  />
                )}

                <p className="card-text">{rooms.Rid}</p>
                <p className="card-text">{rooms.Rtype}</p>
                <p className="card-text">{rooms.description}</p>
                <p className="card-text">{rooms.capacity}</p>
                <p className="card-text">{rooms.NoOfBeds}</p>
                <p className="card-text">{rooms.price}</p>
                <p className="card-text">{rooms.status}</p>

                <div style={{ float: "right" }}>
                  <a href="/CustomerDetails" className="btn btn-info" onClick={() => handleRoomSelect(rooms.Rid)}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}}
export default Room;
