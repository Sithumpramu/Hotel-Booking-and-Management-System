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

            <div className="d-flex justify-content-around mb-3">
              <table
                className="table table-dark table-striped"
                style={{ width: "75rem" }}
              >
                {reservationList.map((reservation) => (
                  <tbody key={reservation._id}>
                    <tr className="border border-black">
                      <td className="border border-black">Customer Name</td>
                      <td className="border border-black">Contact No</td>
                      <td className="border border-black">Address</td>
                      <td className="border border-black">CheckIn Date</td>
                      <td className="border border-black">CheckIn Time</td>
                      <td className="border border-black">Activities</td>
                      <td></td>
                    </tr>

                    <tr className="border border-black" scope="col">
                      <td className="border border-black">
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

                      <td className="border border-black">
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

                      <td className="border border-black">
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

                      <td className="border border-black">
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

                      <td className="border border-black">
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

                      <td className="border border-black">
                        {reservation.activityList.map((activity, index) => (
                          <div key={index} className="text-start">
                            <div>
                              <span className="fst-italic">
                                Activity Name:{" "}
                              </span>
                              <span className="fw-bolder">{activity.id}</span>
                            </div>
                            <div>
                              <span className="fst-italic">No.of.People: </span>
                              <span className="fw-bolder">{activity.Qty}</span>
                            </div>
                            <div>
                              <span className="fst-italic">
                                Number of Rides:{" "}
                              </span>
                              <span className="fw-bolder">
                                {activity.noOfRides}
                              </span>
                            </div>
                            <div>
                              <span className="fst-italic">Price : </span>
                              <span className="fw-bolder">
                                Rs.{activity.activityTPrice}.00
                              </span>
                            </div>
                            <div>
                              <p></p>
                            </div>
                          </div>
                        ))}
                      </td>

                      <td className="border border-black">
                        <div className="m-2 align">
                          <button
                            className="btn btn-success"
                            style={{ width: "10rem" }}
                            data-bs-toggle="modal"
                            data-bs-target="#Modal"
                            onClick={() => setNameToDelete(reservation._id)}
                          >
                            CheckOut
                          </button>

                          <div className="m-2">
                            {nameToUpdate === reservation._id ? (
                              <button
                                className="btn btn-primary"
                                style={{ width: "10rem" }}
                                onClick={() => updateDetails()}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                style={{ width: "10rem" }}
                                onClick={() => getUpdateData(reservation)}
                              >
                                Update Details
                              </button>
                            )}
                          </div>

                          <div className="m-2">
                            <button
                              className="btn btn-danger "
                              style={{ width: "10rem" }}
                              data-bs-toggle="modal"
                              data-bs-target="#Modal"
                              onClick={() => setNameToDelete(reservation._id)}
                            >
                              Cancel Reservation
                            </button>
                          </div>
                        </div>
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
