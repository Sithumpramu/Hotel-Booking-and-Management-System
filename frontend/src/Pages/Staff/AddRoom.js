import { useState } from "react";
import React from "react";
import ManagerPanel from "../../components/RoomManagerNavbar";
import useAddRoom from "../../hooks/useAddRoom";

const AddNewRoom = () => {
  const [Rid, setRid] = useState("");
  const [Rtype, setRtype] = useState("");
  const [description, setdescription] = useState("");
  const [capacity, setcapacity] = useState("");
  const [NoOfBeds, setNoOfBeds] = useState("");
  const [price, setprice] = useState("");
 
  const [Image, setImage] = useState(null);

  const { addRoom, isLoading, error } = useAddRoom();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addRoom(
      Rid,
      Rtype,
      description,
      capacity,
      NoOfBeds,
      price,
      Image
    );
  };

  function validation() {
    var submit = document.getElementById("submit");

    if (
      Rid === "" &&
      Rtype === "" &&
      description === "" &&
      capacity === "" &&
      NoOfBeds === "" &&
      price === "" 
    ) {
      document.getElementById("Error").innerHTML = "All fields must be filled.";
    }
  }

  return (
    <div>
      <ManagerPanel />
      <h2>Add Room</h2>

      <div className="card">
        <form
          onSubmit={handleSubmit}
          method="Post"
          style={{ maxWidth: "500px", margin: "auto" }} // Updated inline CSS
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomId">Room ID:</label>
            <input
              type="text"
              id="roomId"
              onChange={(e) => {
                setRid(e.target.value);
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomType">Room Type:</label>
            <input
              type="text"
              id="roomType"
              onChange={(e) => {
                setRtype(e.target.value);
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomDescription">Description:</label>
            <input
              type="text"
              id="roomDescription"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomCapacity">Capacity:</label>
            <input
              type="number"
              id="roomCapacity"
              onChange={(e) => {
                setcapacity(e.target.value);
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roombeds">No of Beds:</label>
            <input
              type="number"
              id="roombeds"
              onChange={(e) => {
                setNoOfBeds(e.target.value);
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomPrice">Price:</label>
            <input
              type="number"
              id="roomPrice"
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>

          

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="roomImage">Image file:</label>
            <input
              type="file"
              id="roomImage"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            id="submit"
            onClick={() => {
              validation();
            }}
          >
            Add Room
          </button>

          <p id="Error"></p>
        </form>
      </div>
    </div>
  );
};

export default AddNewRoom;
