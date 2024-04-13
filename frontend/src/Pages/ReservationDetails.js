import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import useAddRoomReserve from '../hooks/useAddRoomReserve';
import { useAuthContext } from '../hooks/useAuthContext'

function ReservationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate , checkoutDate, guests ,roomId} = location.state;
  const {user}=useAuthContext()

  const [name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  // const { addRoomReserve, isLoading, error } = useAddRoomReserve();

//   const handleSubmit = () => {
   
//     console.log('Submitting reservation details:', { checkinDate, checkoutDate, guests, name, email });

//     addRoomReserve(checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno);
// };

const RandomRoomResvID = () => {
  const prefix = "RB"; 
  const digits = Math.floor(Math.random() * 100000000); // Generate 8 digits
  const paddedDigits = String(digits).padStart(8, '0'); 
  return prefix + paddedDigits;
};
  

const RoomResvID = RandomRoomResvID ();

useState(() => {
  if (user && user.email) {
    setEmail(user.email);
  }
}, [user]);

const handleNext = () => {
  // Pass data to rooms page
  navigate('/payment', {
    state: {
      checkinDate,
      checkoutDate,
      guests,
      roomId,
      name,
      email,
      Address,
      phoneno,
      RoomResvID
    }
  });
};

  return (
    <div>
      <h2>Enter Reservation Details</h2>
      <p>Room:{roomId}</p>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      {user &&(
      <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>Email:</label>
      <input type="email" value={user.email} onChange={(e) => setEmail(user.email)} /><br />
      <label>Address:</label>
      <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} /><br />
      <label>Phone Number:</label>
      <input type="text" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} /><br />
      </div>
      )}

      <button onClick={handleNext}>Submit</button>
    </div>
  );
}

export default ReservationDetails;
