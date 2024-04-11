import { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteTableReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";


const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();

  const [nameToDelete, setNameToDelete] = useState("");
  const { deleteTableReservation } = useDeleteReservation();

  //const [nameToUpdate, setNameToUpdate] = useState("");
  const [Date, setDate] = useState("");
  const [Name, setName] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");

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

  //   const getUpdateData = (reservation) => {
  //     setNameToUpdate(reservation._id);
  //     setDate(reservation.Date);
  //     setName(reservation.Name);
  //     setCapacity(reservation.Capacity);
  //     setemail(reservation.email);
  //     setContactNumber(reservation.ContactNumber);
  //     //setQty(reservation.Qty);
  //     // setTableList(reservation. TableList);
  //   };

  /* const updateDetails = async () => {
        await updateReserv(
            nameToUpdate,
            Date,
            Name,
            Capacity,
            email,
            ContactNumber
        );
    };
*/

  const handleDelete = async () => {
    await deleteTableReservation(nameToDelete);
    console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  return (
    <div className="vh-150">
      <h1>My Reservations</h1>

      <div class="container text-center">
        {TableList.map((Table) => (
          <div key={Table._id}>
            <h4>{Table.Date}</h4>
            <p>
              <strong>Name: </strong>
              {Table.Name}
            </p>
            <p>
              <strong>Capacity: </strong>
              {Table.Capacity}
            </p>
            <p>
              <strong>Email: </strong>
              {Table.email}
            </p>
            <p>
              <strong>Telephone Number: </strong>
              {Table.contactNumber}
            </p>
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: "10rem" }}
            >
              Edit Details
            </button>
            <button
              type="button"
              class="btn btn-primary "
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
              onClick={() => setNameToDelete(Table._id)}
            >
              Cancel Reservation
            </button>
          </div>
        ))}
      </div>

      {/*delete model  */}
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
};

export default TableReservation;
