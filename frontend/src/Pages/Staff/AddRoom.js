import {useState} from "react";
import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';
import useAddRoom from "../../hooks/useAddRoom";

const AddNewRoom = () => {
    const [Rid, setRid] = useState("");
    const [Rtype, setRtype] = useState("");
    const [description, setdescription] = useState("");
    const [capacity, setcapacity] = useState("");
    const [NoOfBeds, setNoOfBeds] = useState("");
    const [price, setprice] = useState("");
    const [status, setstatus] = useState("");
    // const [Image, setImage] = useState("");

    const { addRoom, isLoading, error } = useAddRoom();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addRoom(Rid, Rtype, description, capacity, NoOfBeds, price, status);
    };

    function validation() {
        var submit = document.getElementById("submit");

        if (Rid === "" && Rtype === "" && description === "" && capacity === "" && NoOfBeds === "" && price === "" &&
            status === "") {
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
                    style={{ width: "18rem",  height:"40rem" }}
                >
                    <div>
                        <label>
                            Room ID:
                        </label>
                        <input
                            type="text"
                            className=""
                            id="roomId"
                            onChange={(e) => {
                                setRid(e.target.value);
                            }}
                        />

                        <label>
                            Room Type:
                        </label>
                        <input type="text" 
                        className=""
                        id="roomType"
                        onChange={(e)=>{
                            setRtype(e.target.value);
                        }}/>


                        <label>
                            Description:
                        </label>
                        <input type="text" 
                        className=""
                        id="roomDescription"
                        onChange={(e)=>{
                            setdescription(e.target.value);
                        }}/>


                        <label>
                            Capacity:
                        </label>
                        <input type="number" 
                         className=""
                         id="roomCapacity"
                         onChange={(e)=>{
                             setcapacity(e.target.value);
                         }}/>


                        <label>
                            No of Beds:
                        </label>

                        <input type="number" 
                         className=""
                         id="roombeds"
                         onChange={(e)=>{
                             setNoOfBeds(e.target.value);
                         }}/>

                        <label>
                            Price:
                        </label>
                        <input type="number" 
                        className=""
                        id="roomPrice"
                        onChange={(e)=>{
                            setprice(e.target.value);
                        }}/>

                        <label>
                        Status: 
                        </label>
                        <input type="text" 
                        className=""
                        id="roomStatus"
                        onChange={(e)=>{
                            setstatus(e.target.value);
                        }}/>

                        {/* <label>
                            Image file: 
                        </label>
                        <input type="file" 
                        className=""
                        id="roomImage"
                        onChange={(e)=>{
                            setImage(e.target.value);
                        }}/> */}

                    </div>

                    <button type="submit"
                    className="btn btn-primary"
                    id="submit"
                    onClick={() => {
                        validation();
                    }}>Add Room</button>
                </form>
            </div>
        </div>
    );
}





export default AddNewRoom;
