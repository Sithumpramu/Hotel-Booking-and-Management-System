import React, { useState } from "react";

import useActivityList from "../../hooks/useActivityList";
//import useActivityDelete from "../../hooks/useWatersportReservations";
import useWatersportReservation from "../../hooks/useWatersportReservations";
import useDeleteReservation from "../../hooks/useDeleteReservation";
import useUpdateReserv from "../../hooks/useUpdateWatersportReservation";
import ReceptionNavbar from "../../components/receptionNavbar";

function WatersportReservations() {
  const { reservationList, isLoading, error } = useWatersportReservation();
  const { ActivityList } = useActivityList();
  const { deleteReservation } = useDeleteReservation();
  const { updateReserv } = useUpdateReserv();
  const [nameToDelete, setNameToDelete] = useState("");
  const [nameToUpdate, setNameToUpdate] = useState("");
  const [saveUpdate, setSaveUpdate] = useState("");
  const [CusName, setCusName] = useState("");
  const [TelNo, setTelNo] = useState("");
  const [Address, setAddress] = useState("");
  const [checkinDate, setcheckinDate] = useState("");
  const [checkinTime, setcheckinTime] = useState("");
  //const [Qty, setQty] = useState("");
  const [activityList, setActivityList] = useState([]);

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
    await deleteReservation(nameToDelete);
    //console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  const getUpdateData = (reservation) => {
    setNameToUpdate(reservation._id);
    setCusName(reservation.CusName);
    setTelNo(reservation.TelNo);
    setAddress(reservation.Address);
    setcheckinDate(reservation.checkinDate);
    setcheckinTime(reservation.checkinTime);
    //setQty(reservation.Qty);
    setActivityList(reservation.activityList);
  };

  const updateDetails = async () => {
    await updateReserv(
      nameToUpdate,
      CusName,
      TelNo,
      Address,
      checkinDate,
      checkinTime,
      activityList
    );
  };

  const getActivityIds = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const ids = selectedOptions.map((option) => option.value);
    setActivityList(ids);
  };

  return (
    <div className="row">
      <ReceptionNavbar />
      <div className="col">
        <div>
          <div>
            <h1 className="mb-4 mt-5">Watersport Reservations</h1>

            <div className="d-flex align-items-center justify-content-around mb-3">
              <table className="table" style={{ width: "75rem" }}>
                <tr className="border border-black" scope="col">
                  <th scope="col">Customer Name</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Address</th>
                  <th scope="col">CheckIn Date</th>
                  <th scope="col">CheckIn Time</th>
                  <th scope="col">Activities</th>
                  <th></th>
                  <th></th>
                </tr>

                {reservationList.map((reservation) => (
                  <tbody key={reservation._id}>
                    <tr className="border border-black" scope="col">
                      <td>
                        {nameToUpdate === reservation._id ? (
                          <input
                            className="tabledit-input form-control input-sm"
                            type="text"
                            name="CusName"
                            defaultValue={reservation.CusName}
                            disabled=""
                            onChange={(e) => {
                              setCusName(e.target.value);
                            }}
                          ></input>
                        ) : (
                          <td>{reservation.CusName}</td>
                        )}
                      </td>

                      <td>
                        {nameToUpdate === reservation._id ? (
                          <input
                            className="tabledit-input form-control input-sm"
                            type="number"
                            name="TelNo"
                            defaultValue={reservation.TelNo}
                            disabled=""
                            onChange={(e) => {
                              setTelNo(e.target.value);
                            }}
                          ></input>
                        ) : (
                          <td>{reservation.TelNo}</td>
                        )}
                      </td>

                      <td>
                        {nameToUpdate === reservation._id ? (
                          <input
                            className="tabledit-input form-control input-sm"
                            type="text"
                            name="Address"
                            defaultValue={reservation.Address}
                            disabled=""
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          ></input>
                        ) : (
                          <td>{reservation.Address}</td>
                        )}
                      </td>

                      <td>
                        {nameToUpdate === reservation._id ? (
                          <input
                            className="tabledit-input form-control input-sm"
                            type="Date"
                            name="checkinDate"
                            defaultValue={reservation.checkinDate}
                            disabled=""
                            onChange={(e) => {
                              setcheckinDate(e.target.value);
                            }}
                          ></input>
                        ) : (
                          <td>{reservation.checkinDate}</td>
                        )}
                      </td>

                      <td>
                        {nameToUpdate === reservation._id ? (
                          <input
                            className="tabledit-input form-control input-sm"
                            type="Time"
                            name="checkinTime"
                            defaultValue={reservation.checkinTime}
                            disabled=""
                            onChange={(e) => {
                              setcheckinTime(e.target.value);
                            }}
                          ></input>
                        ) : (
                          <td>{reservation.checkinTime}</td>
                        )}
                      </td>

                      <td>
                        {reservation.activityList.map((activity, index) => (
                          <div key={index}>
                            <div className="">ID: {activity.id}</div>
                            <div>Qty: {activity.Qty}</div>
                            <div>Number of Rides: {activity.noOfRides}</div>
                            <div>Total Price: {activity.activityTPrice}</div>
                          </div>
                        ))}
                      </td>

                      <td>
                        <a
                          href="#"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal"
                          onClick={() => setNameToDelete(reservation._id)}
                        >
                          Cancel
                        </a>
                      </td>

                      <td>
                        {nameToUpdate === reservation._id ? (
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => updateDetails()}
                          >
                            Save
                          </a>
                        ) : (
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => getUpdateData(reservation)}
                          >
                            Update
                          </a>
                        )}
                      </td>

                      <td>
                        <a
                          href="#"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal"
                          onClick={() => setNameToDelete(reservation._id)}
                        >
                          CheckOut
                        </a>
                      </td>
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
      </div>
    </div>
  );
}

export default WatersportReservations;
