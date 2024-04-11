import { useState } from "react";
import React from 'react';
import useAddRoomReserve from "../hooks/useAddRoomReserve";

const AddNewRoomReserve = () => {
  const [Checkindate, setCheckindate] = useState("");
  const [Checkoutdate, setCheckoutdate] = useState("");
  const [Rtype, setRtype] = useState("");
  const [NoOfGuests, setNoOfGuests] = useState("");




  const { addRoomReserve, isLoading, error } = useAddRoomReserve();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addRoomReserve(Checkindate, Checkoutdate, Rtype, NoOfGuests);
  };

  function validation() {
    var submit = document.getElementById("submit");

    if (Checkindate === "" && Checkoutdate === "" && Rtype === "" && NoOfGuests === "") {
      document.getElementById("Error").innerHTML = "All fields must be filled.";
    }
  }


  return (
    <div className="background vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("katha.jpg")' }}>
      <div className="card">

        <form onSubmit={handleSubmit}>
          <label>
            Check-in Date:
          </label>
          <input type="date" value={Checkindate} onChange={(e) => setCheckindate(e.target.value)} />

          <label>
            Check-out Date:
          </label>
          <input type="date" value={Checkoutdate} onChange={(e) => setCheckoutdate(e.target.value)} />

          <label>
            Room Type:
          </label>
          <input type="date" value={Rtype} onChange={(e) => setRtype(e.target.value)} />

          <label>
            Number of People:
          </label>
          <input type="number" value={Rtype} onChange={(e) => setRtype(e.target.value)} />

        </form>
        <button type="submit">Book Now</button>
      </div>
    </div>
  )
}

export default AddNewRoomReserve;
