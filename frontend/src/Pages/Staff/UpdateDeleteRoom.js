import React, { useState } from "react";
import RoomList from "../../hooks/useRoomList";
import useDeleteRoom from "../../hooks/useDeleteRoom";

function DeleteRoom() {
  const { rooms, isLoading, error } = RoomList();// roomlist was there in brackets
  const { DeleteRoom } = useDeleteRoom();
  const [RidToDelete, setRidToDelete] = useState("");
  //const { rooms } = RoomList();

  if (isLoading) {
    return (
      <div className="alert alert-primary" role="alert">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = async () => {
    await DeleteRoom(RidToDelete);
    //console.log(isLoading, "handleDelete loading");
    setRidToDelete("");
  };




  

  return (
    <div>
      <div className="row bs">
        {rooms.map((rooms) => (
          <div className="">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-around align-items-center bg-info">
                  <div>
                    {rooms.Image && rooms.Image.data && (
                      <img
                        style={{ width: "10rem" }}
                        src={`data:${rooms.Image.contentType};base64,${btoa(
                          String.fromCharCode.apply(null, rooms.Image.data.data)
                        )}`}
                        className="card-img-top mb-1"
                        alt={rooms.Rtype}
                      />
                    )}</div>

                  <div>

                    <p className="card-text">{rooms.Rid}</p>
                    <p className="card-text">{rooms.Rtype}</p>
                    <p className="card-text">{rooms.description}</p>
                    <p className="card-text">{rooms.capacity}</p>
                    <p className="card-text">{rooms.NoOfBeds}</p>
                    <p className="card-text">{rooms.price}</p>
                    <p className="card-text">{rooms.status}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center bg-secondary">
                  <div className="me-5">
                    <button
                       onClick={() => setRidToDelete(rooms._id)}>

                      Delete Room 
                    </button>
                  </div>
                  <div><button>
                    Update Room
                  </button></div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteRoom;
