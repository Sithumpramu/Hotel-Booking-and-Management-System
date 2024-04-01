import React, { useState } from "react";

//import useActivityList from "../../hooks/useActivityList";
//import useActivityDelete from "../../hooks/useWatersportReservations";
import useWatersportReservation from "../../hooks/useWatersportReservations";

function WatersportReservations() {
  const { reservationList, isLoading, error } = useWatersportReservation();
  //const { deleteActivity } = useActivityDelete();
  //const [nameToDelete, setNameToDelete] = useState("");

  if (isLoading) {
    return <div className="alert alert-primary" role="alert">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

//   const handleDelete = async () => {
//     await deleteActivity(nameToDelete);
//     //console.log(isLoading, "handleDelete loading");
//     setNameToDelete("");
//   };

  return (
    <div>
      <div>
        <h1 className="mb-4 mt-5">Watersport Reservations</h1>
        
        <div className="d-flex align-items-center justify-content-around mb-3">
          
            <table className="table" style={{ width: "35rem" }}>
              
                <tr>
                  <th scope="col">CusName</th>
                  <th scope="col">TelNo</th>
                  <th scope="col">Address</th>
                  <th scope="col">checkinTime</th>
                  <th scope="col">AdvancePayment</th>
                  <th scope="col">activities</th>
                </tr>

              {reservationList.map((WatersportReservation) => (
              
              <tbody key={WatersportReservation._id}>
                <tr>
                  
                  <td>{WatersportReservation.CusName}</td>
                  <td>{WatersportReservation.TelNo}</td>
                  <td>{WatersportReservation.Address}</td>
                  <td>{WatersportReservation.checkinTime}</td>
                  <td>{WatersportReservation.AdvancePayment}</td>
                  <td>
                      {WatersportReservation.activityIds.join(", ")}</td>
                  
                  
                </tr>
                
              </tbody>
              ))}
            </table>
            
        </div>
        
      </div>
    </div>
  );
}

export default WatersportReservations;
