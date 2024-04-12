import { useEffect, useState } from "react";
import useTableList from "../../hooks/useDiningReserv";

const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();

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
      <h1 className="mb-4 mt-5">Watersport Reservations</h1>

      <div className="d-flex align-items-center justify-content-around mb-3">
        <table className="table" style={{ width: "75rem" }}>
          <tr className="border border-black" scope="col">
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Capacity</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No</th>

            <th></th>
          </tr>

          {TableList.map((Table) => (
            <tbody key={Table._id}>
              <tr className="border border-black" scope="col">
                <td>{Table.Date}</td>

                <td>{Table.Name}</td>

                <td>{Table.Capacity}</td>

                <td>{Table.email}</td>

                <td>{Table.contactNumber}</td>

                <td>
                  <a
                    href="#"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    
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
  );
};

export default TableReservation;
