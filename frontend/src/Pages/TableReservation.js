import { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteTableReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";

const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();

  const [nameToDelete, setNameToDelete] = useState("");
  const { deleteTableReservation } = useDeleteReservation();

  const { updateReservation } = useUpdateReservation();

  const [IdToUpdate, setIdToUpdate] = useState("");
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

  const getUpdateData = (Table) => {
    setIdToUpdate(Table._id);
    setDate(Table.Date);
    setName(Table.Name);
    setCapacity(Table.Capacity);
    setemail(Table.email);
    setcontactNumber(Table.contactNumber);
  };

  const updateDetails = async () => {
    await updateReservation(
      IdToUpdate,
      Date,
      Name,
      Capacity,
      email,
      contactNumber
    );
  };

  const handleDelete = async () => {
    await deleteTableReservation(nameToDelete);
    console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  return (
    // <div className="vh-150">
    //   <h1>My Reservations</h1>

    //   <div class="container text-center">
    //     {TableList.map((Table) => (
    //       <div key={Table._id}>
    //         <h4>
    //           {IdToUpdate === Table._id ? (
    //             <input
    //               className="tabledit-input form-control input-sm"
    //               type="Date"
    //               name="Date"
    //               defaultValue={Table.Date}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //             ></input>
    //           ) : (
    //             <h4>{Table.Date}</h4>
    //           )}
    //         </h4>
    //         <p>
    //           <strong>Name: </strong>

    //           {IdToUpdate === Table._id ? (
    //             <input
    //               className="tabledit-input form-control input-sm"
    //               type="text"
    //               name="Name"
    //               defaultValue={Table.Name}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //             ></input>
    //           ) : (
    //             <p>{Table.Name}</p>
    //           )}

    //           {/* {Table.Name} */}
    //         </p>
    //         <p>
    //           <strong>Capacity: </strong>

    //           {IdToUpdate === Table._id ? (
    //             <input
    //               className="tabledit-input form-control input-sm"
    //               type="number"
    //               name="Capacity"
    //               defaultValue={Table.Capacity}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //             ></input>
    //           ) : (
    //             <p>{Table.Capacity}</p>
    //           )}

    //           {/* {Table.Capacity} */}
    //         </p>
    //         <p>
    //           <strong>Email: </strong>

    //           {IdToUpdate === Table._id ? (
    //             <input
    //               className="tabledit-input form-control input-sm"
    //               type="email"
    //               name="email"
    //               defaultValue={Table.email}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //             ></input>
    //           ) : (
    //             <p>{Table.email}</p>
    //           )}

    //           {/* {Table.email} */}
    //         </p>
    //         <p>
    //           <strong>Telephone Number: </strong>

    //           {IdToUpdate === Table._id ? (
    //             <input
    //               className="tabledit-input form-control input-sm"
    //               type="number"
    //               name="contactNumber"
    //               defaultValue={Table.contactNumber}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //             ></input>
    //           ) : (
    //             <p>{Table.contactNumber}</p>
    //           )}

    //           {/* {Table.contactNumber} */}
    //         </p>

    //         {IdToUpdate === Table._id ? (
    //           <a
    //             href="#"
    //             className="btn btn-primary"
    //             onClick={() => updateDetails()}
    //           >
    //             Save
    //           </a>
    //         ) : (
    //           <a
    //             href="#"
    //             className="btn btn-primary"
    //             onClick={() => getUpdateData(Table)}
    //           >
    //             Update
    //           </a>
    //         )}

    //         <button
    //           type="button"
    //           class="btn btn-primary "
    //           className="btn btn-danger"
    //           data-bs-toggle="modal"
    //           data-bs-target="#Modal"
    //           onClick={() => setNameToDelete(Table._id)}
    //         >
    //           Cancel Reservation
    //         </button>
    //       </div>
    //     ))}
    //   </div>

    //   {/*delete model  */}
      // <div
      //   className="modal fade"
      //   id="Modal"
      //   tabindex="-1"
      //   aria-labelledby="exampleModalLabel"
      //   aria-hidden="true"
      // >
      //   <div className="modal-dialog modal-dialog-centered">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h1 className="modal-title fs-5" id="exampleModalLabel">
      //           CAUTION
      //         </h1>
      //         <button
      //           type="button"
      //           className="btn-close"
      //           data-bs-dismiss="modal"
      //           aria-label="Close"
      //         ></button>
      //       </div>
      //       <div className="modal-body">
      //         Are you sure you want to cancel this Reservation?
      //       </div>
      //       <div className="modal-footer">
      //         <button
      //           type="button"
      //           className="btn btn-secondary"
      //           data-bs-dismiss="modal"
      //         >
      //           Close
      //         </button>

      //         <form action="" method="delete">
      //           <button
      //             className="btn btn-outline-danger"
      //             onClick={handleDelete}
      //           >
      //             CANCEL
      //           </button>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    // </div>

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
                <td>
                  {IdToUpdate === Table._id ? (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="Date"
                      name="Date"
                      defaultValue={Table.Date}
                      disabled=""
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Table.Date}</td>
                  )}
                </td>

                <td>
                  {IdToUpdate === Table._id ? (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="Text"
                      name="Name"
                      defaultValue={Table.Name}
                      disabled=""
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Table.Name}</td>
                  )}
                </td>

                <td>
                  {IdToUpdate === Table._id ? (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="number"
                      name="Capacity"
                      defaultValue={Table.Capacity}
                      disabled=""
                      onChange={(e) => {
                        setCapacity(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Table.Capacity}</td>
                  )}
                </td>

                <td>
                  {IdToUpdate === Table._id ? (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="email"
                      name="email"
                      defaultValue={Table.email}
                      disabled=""
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Table.email}</td>
                  )}
                </td>

                <td>
                  {IdToUpdate === Table._id ? (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="Number"
                      name="contactNumber"
                      defaultValue={Table.contactNumber}
                      disabled=""
                      onChange={(e) => {
                        setcontactNumber(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Table.contactNumber}</td>
                  )}
                </td>

                <td>
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
                </td>

                <td>
                  {IdToUpdate === Table._id ? (
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
                      onClick={() => getUpdateData(Table)}
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
                    onClick={() => setNameToDelete(Table._id)}
                  >
                    CheckOut
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
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
