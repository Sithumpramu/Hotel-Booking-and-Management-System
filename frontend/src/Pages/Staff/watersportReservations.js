import React, { useState } from "react";

import useActivityList from "../../hooks/useActivityList";
//import useActivityDelete from "../../hooks/useWatersportReservations";
import useWatersportReservation from "../../hooks/useWatersportReservations";
import useDeleteReservation from "../../hooks/useDeleteReservation";
import useUpdateReserv from "../../hooks/useUpdateWatersportReservation";

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
  const [checkinTime, setcheckinTime] = useState("");
  const [AdvancePayment, setAdvancePayment] = useState("");
  const [activityIds, setActivityIds] = useState([]);

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
    setcheckinTime(reservation.checkinTime);
    setAdvancePayment(reservation.AdvancePayment);
    setActivityIds(reservation.activityIds);
  };

  const updateDetails = async () => {
    await updateReserv(
      nameToUpdate,
      CusName,
      TelNo,
      Address,
      checkinTime,
      AdvancePayment,
      activityIds
    );
  };

  const getActivityIds = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const ids = selectedOptions.map((option) => option.value);
    setActivityIds(ids);
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 mt-5">Watersport Reservations</h1>

        <div className="d-flex align-items-center justify-content-around mb-3">
          <table className="table" style={{ width: "75rem" }}>
            <tr>
              <th className="border border-black" scope="col">
                Customer Name
              </th>
              <th className="border border-black" scope="col">
                Contact No
              </th>
              <th className="border border-black" scope="col">
                Address
              </th>
              <th className="border border-black" scope="col">
                checkIn Time
              </th>
              <th className="border border-black" scope="col">
                Advance Payment
              </th>
              <th className="border border-black" scope="col">
                Activities
              </th>
              <th></th>
              <th></th>
            </tr>

            {reservationList.map((reservation) => (
              <tbody key={reservation._id}>
                <tr>
                  <td>
                    {nameToUpdate === reservation._id ? (
                      <input
                        class="tabledit-input form-control input-sm"
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
                        class="tabledit-input form-control input-sm"
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
                        class="tabledit-input form-control input-sm"
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
                        class="tabledit-input form-control input-sm"
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
                    {nameToUpdate === reservation._id ? (
                      <input
                        class="tabledit-input form-control input-sm"
                        type="number"
                        name="AdvancePayment"
                        defaultValue={reservation.AdvancePayment}
                        disabled=""
                        onChange={(e) => {
                          setAdvancePayment(e.target.value);
                        }}
                      ></input>
                    ) : (
                      <td>{reservation.AdvancePayment}</td>
                    )}
                  </td>

                  <td>
                    {nameToUpdate === reservation._id ? (
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        multiple
                        defaultValue={reservation.activityIds}
                        onChange={(e) => {
                          getActivityIds(e);
                        }}
                      >
                        {ActivityList.map((Watersport) => (
                          <option selected>{Watersport.Activity}</option>
                        ))}
                      </select>
                    ) : (
                      <td>{reservation.activityIds.join(", ")}</td>
                    )}
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
