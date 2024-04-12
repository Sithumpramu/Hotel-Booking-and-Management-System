import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
//import useAddRoomReserve from "../hooks/useAddRoomReserve";

const AddNewRoomReserve = () => {
  const [Checkindate, setCheckindate] = useState("");
  const [Checkoutdate, setCheckoutdate] = useState("");
  const [NoOfGuests, setNoOfGuests] = useState("");


  
  const navigate = useNavigate();

  const handleNext = () => {
    // Pass data to rooms page
    navigate('/rooms', {
      state: {
        Checkindate,
        Checkoutdate,
        NoOfGuests
      }
    });
  };

  return (
    <div className="background vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("katha.jpg")' }}>
      <div className="card">

        <form onSubmit={handleNext}>
          <label>
            Check-in Date:
          </label>
          <input type="date"
            className=""
            id="checkindate"
            onChange={(e) => {
              setCheckindate(e.target.value);
            } } min={new Date().toISOString().split('T')[0]}/>

          <label>
            Check-out Date:
          </label>
          <input type="date"
            className=""
            id="checkoutdate"
            onChange={(e) => {
              setCheckoutdate(e.target.value);
            }} min={new Date().toISOString().split('T')[0]} />

          
          <label>
            Number of Guests:
          </label>
          <input type="number"
            className=""
            id="NoOfGuests"
            onChange={(e) => {
              setNoOfGuests(e.target.value);
            }} />

          <button
            type="submit"
            className= "btn btn-info"
            id="submit"
            onClick={handleNext}
          >
            Next
          </button>

          <p id="Error"></p>
        </form>

      </div>
    </div>
  )
}

export default AddNewRoomReserve;
