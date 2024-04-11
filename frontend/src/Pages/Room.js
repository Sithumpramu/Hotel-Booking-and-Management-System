import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RoomList from "../hooks/useRoomList";
function Rooms() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rooms } = RoomList();
  const { checkinDate, checkoutDate, guests } = location.state;

  console.log('Check-in Date:', checkinDate);
  console.log('Check-out Date:', checkoutDate);
  console.log('Number of Guests:', guests);

  const handleRoomSelect = (roomId) => {
    // Pass selected room ID and reservation details to details page
    const randomRoomId =1;
    navigate('/CustomerDetails', {
      state: {
        roomId:randomRoomId,
        checkinDate,
        checkoutDate,
        guests
      }
    });
  };



  return (
<div>
      <div className="row bs">
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
                  <a href="/CustomerDetails" className="btn btn-info" onClick={handleRoomSelect}>
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
}

export default Rooms;
