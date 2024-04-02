import React, { useState } from "react";

//import useActivityList from "../../hooks/useActivityList";
//import useActivityDelete from "../../hooks/useWatersportReservations";
import useWatersportReservation from "../../hooks/useWatersportReservations";
import useDeleteReservation  from "../../hooks/useDeleteReservation";

function WatersportReservations() {
  const { reservationList, isLoading, error } = useWatersportReservation();
  const { deleteReservation } = useDeleteReservation();
  const [nameToDelete, setNameToDelete] = useState("");

  if (isLoading) {
    return <div className="alert alert-primary" role="alert">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = async () => {
    await deleteReservation(nameToDelete);
    //console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 mt-5">Watersport Reservations</h1>
        
        <div className="d-flex align-items-center justify-content-around mb-3">
          
            <table className="table" style={{ width: "75rem" }}>
              
                <tr>
                  <th className="border border-black" scope="col">Customer Name</th>
                  <th className="border border-black" scope="col">Contact No</th>
                  <th className="border border-black" scope="col">Address</th>
                  <th className="border border-black" scope="col">checkIn Time</th>
                  <th className="border border-black" scope="col">Advance Payment</th>
                  <th className="border border-black" scope="col">Activities</th>
                  <th></th>
                  <th></th>
                </tr>

              {reservationList.map((reservation) => (
              
              <tbody key={reservation._id}>
                <tr>
                  
                  <td className="border border-black">{reservation.CusName}</td>
                  <td className="border border-black">{reservation.TelNo}</td>
                  <td className="border border-black">{reservation.Address}</td>
                  <td className="border border-black">{reservation.checkinTime}</td>
                  <td className="border border-black">Rs.{reservation.AdvancePayment}.00</td>
                  <td className="border border-black">
                      {reservation.activityIds.join(", ")}</td>
                  <td><a
                  href="#"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#Modal"
                  onClick={() => setNameToDelete(reservation._id)}
                >
                  Cancel
                </a></td>
                <td><a href="#"
                      className="btn btn-primary">Update</a></td>
                </tr>
                
              </tbody>
              ))}
            </table>
            
        </div>
        
      </div>

      {/* model  */}
      <div
        className="modal fade"
        id="Modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                CAUTION
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to cancel this Reservation?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <form action="" method="delete">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  CANCEL
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default WatersportReservations;
