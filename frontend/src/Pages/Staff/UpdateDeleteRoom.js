import React, { useState } from "react";
import RoomList from "../hooks/useRoomList";
//import useDeleteRoom from "../hooks/useDeleteRoom";
import Room from "../rooms";

function DeleteRoom() {
  const { rooms } = RoomList();

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
                  <button>
                    Delete Room
                  </button>
                  <button>
                    Update Room
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

export default DeleteRoom ;
