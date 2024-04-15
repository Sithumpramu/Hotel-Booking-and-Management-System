import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RoomList from "../hooks/useRoomList";

function Rooms() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rooms } = RoomList();
  const { Checkindate, Checkoutdate, NoOfGuests } = location.state || {};

  // Check if location state exists
 // if (!Checkindate || !Checkoutdate || !NoOfGuests) {
   // return <div>No check-in date, check-out date, or number of guests provided.</div>;
  //}

  console.log('Check-in Date:', Checkindate);
  console.log('Check-out Date:', Checkoutdate);
  console.log('Number of Guests:', NoOfGuests);

  const handleRoomSelect = (roomId, price) => {
    // Call the token check function before navigating
    TokenCheckAndNavigate(roomId, price);
  };

  const TokenCheckAndNavigate = (roomId, price) => {
    const token = localStorage.getItem('user');
    if (!token) {
      navigate('/login');
      return;
    }

    // If token is present
    navigate('/CustomerDetails', {
      state: {
        Rid: roomId,
        Checkindate,
        Checkoutdate,
        NoOfGuests,
        price: price
      }
    });
  };

  localStorage.removeItem('prevPath');

  return (
    <div>
      <div className="row bs">
        {rooms.map((room) => (
          <div className="col-md-7" key={room.Rid}>
            <div className="card">
              <div className="card-body" >
                {room.Image && room.Image.data && (
                  <img
                    style={{ width: "10rem" }}
                     src={`data:${room.Image.contentType};base64,${btoa(
                     String.fromCharCode.apply(null, room.Image.data.data)
                     )}`}
                    className="card-img-top mb-1"
                    alt={room.Rtype}
                  />
                )}

                <p className="card-text">Room Id: {room.Rid}</p>
                <p className="card-text">Room Type: {room.Rtype}</p>
                <p className="card-text">{room.description}</p>
                <p className="card-text">Capacity: {room.capacity}</p>
                <p className="card-text">No.of.Beds: {room.NoOfBeds}</p>
                <p className="card-text">Price: {room.price}</p>
                <p className="card-text">{room.status}</p>

                <div style={{ float: "right" }}>
                  <button className="btn btn-info" onClick={() => handleRoomSelect(room.Rid, room.price)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms; 

