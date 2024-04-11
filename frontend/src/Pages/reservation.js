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
          <input type="date"
            className=""
            id="checkindate"
            onChange={(e) => {
              setCheckindate(e.target.value);
            }} />

          <label>
            Check-out Date:
          </label>
          <input type="date"
            className=""
            id="checkoutdate"
            onChange={(e) => {
              setCheckoutdate(e.target.value);
            }} />

          <label>
            Room Type:
          </label>
          <input type="text"
            className=""
            id="Rtype"
            onChange={(e) => {
              setRtype(e.target.value);
            }} />

          <label>
            Number of Guests:
          </label>
          <input type="number"
            className=""
            id="NoOfGuests"
            onChange={(e) => {
              setNoOfGuests(e.target.value);
            }} />

          <a href="/CustomerDetails"
            type="submit"
            className= "btn btn-info"
            id="submit"
            onClick={() => {
              validation();
            }}
          >
            Add Room
          </a>

          <p id="Error"></p>
        </form>

      </div>
    </div>
  )
}

export default AddNewRoomReserve;
