import React, { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteTableReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";

const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();
  const { deleteTableReservation } = useDeleteReservation();
  const { updateReservation } = useUpdateReservation();

  const [filterDate, setFilterDate] = useState(""); // State variable to store the filtered date
  const [nameToDelete, setNameToDelete] = useState("");

  // Filtering function
  const filteredTableList = TableList.filter((table) => {
    return filterDate ? table.Date === filterDate : true;
  });

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const getUpdateData = (Table) => {
    // Your existing code for updating data
  };

  const updateDetails = async () => {
    // Your existing code for updating details
  };

  const handleDelete = async () => {
    // Your existing code for handling delete
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal and delete button */}
    </div>
  );
};

export default TableReservation;
