import React, { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteTableReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";

const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();
  const { deleteTableReservation } = useDeleteReservation();
  const { updateReservation } = useUpdateReservation();
  const [idToDelete, setidToDelete] = useState("");
  
  const [filterDate, setFilterDate] = useState(""); // State variable to store the filtered date
  const [nameToDelete, setNameToDelete] = useState("");

  // Filtering function
  const filteredTableList = TableList.filter((table) => {
    return filterDate ? table.Date === filterDate : true;
  });

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

 /* const getUpdateData = (Table) => {
    // Your existing code for updating data
    setIdToUpdate(Table._id);
    setDate(Table.Date);
    setName(Table.Name);
    setCapacity(Table.Capacity);
    setemail(Table.email);
    setcontactNumber(Table.contactNumber);
  };

  const updateDetails = async () => {
    // Your existing code for updating details
    await updateReservation(
      IdToUpdate,
      Date,
      Name,
      Capacity,
      email,
      contactNumber
    );
  };
*/
  const handleDelete = async () => {
    await deleteTableReservation(idToDelete);
    console.log(isLoading, "handleDelete loading");
    setidToDelete("");
  };

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

  return (
    <div>
      <h1 className="mb-4 mt-5">My Reservations</h1>

      <div className="mb-3 ">
        <label htmlFor="filterDate" className="form-label">
          Filter by Date:
        </label>
        <input
          type="date"
          id="filterDate"
          className="form-control"
          value={filterDate}
          onChange={handleFilterChange}
        />
      </div>

      <div className="d-flex align-items-center justify-content-around mb-3">
        <table className="table" style={{ width: "75rem" }}>
          <thead>
            <tr className="border border-black" scope="col">
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Capacity</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTableList.map((Table) => (
              <tr key={Table._id} className="border border-black" scope="col">
                <td>{Table.Date}</td>
                <td>{Table.Name}</td>
                <td>{Table.Capacity}</td>
                <td>{Table.email}</td>
                <td>{Table.contactNumber}</td>
                <td>


                  {/* Your update and delete buttons */}

               
                
                  <button
                    type="button"
                    class="btn btn-primary  mt-5"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    onClick={() => setidToDelete(Table._id)}
                  >
                    Cancel Reservation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal and delete button */}
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
              Are you sure you want to cancel this Order?
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
