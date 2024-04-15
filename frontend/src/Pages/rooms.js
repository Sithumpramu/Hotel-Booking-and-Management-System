import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RoomList from "../hooks/useRoomList";

function Rooms(roomId) {
  const location = useLocation();
  const navigate = useNavigate();
  const { rooms } = RoomList();
  const { Checkindate, Checkoutdate, NoOfGuests } = location.state;

  console.log('Check-in Date:', Checkindate);
  console.log('Check-out Date:', Checkoutdate);
  console.log('Number of Guests:', NoOfGuests);

  const handleRoomSelect = (roomId,price) => {
    // Call the token check function before navigating
    TokenCheckAndNavigate(roomId,price);
  };


  const TokenCheckAndNavigate = (roomId,price) => {
    const token = localStorage.getItem('user');
    console.log(roomId)
    if (!token) {
      navigate('/login'); 
      return;
    }

    // If token is present
    else{
    navigate('/CustomerDetails', {
      state: {
        Rid:roomId,
        Checkindate,
        Checkoutdate,
        NoOfGuests,
        price: price
      }
    });}
  };

  localStorage.removeItem('prevPath');


  return (
    <div>
      <div className="row bs">
        {rooms.map((room) => (
          <div className="col-md-7" key={room.id}>
            <div className="card">
              <div className="card-body">
                {room.Image && room.Image.data && (
                  <img
                    // style={{ width: "10rem" }}
                    // src={`data:${room.Image.contentType};base64,${btoa(
                    //   String.fromCharCode.apply(null, room.Image.data.data)
                    // )}`}
                    style={{ width: "10rem" }}
                    src={URL.createObjectURL(
                      new Blob([ room.Image.data], {
                        type: room.Image.contentType
                      })
                    )}
                    className="card-img-top mb-1"
                    alt={room.Rtype}
                  />
                )}

                <p className="card-text">{room.Rid}</p>
                <p className="card-text">{room.Rtype}</p>
                <p className="card-text">{room.description}</p>
                <p className="card-text">{room.capacity}</p>
                <p className="card-text">{room.NoOfBeds}</p>
                <p className="card-text">{room.price}</p>
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