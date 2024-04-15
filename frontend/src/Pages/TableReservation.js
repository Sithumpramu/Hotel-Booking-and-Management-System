import { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteTableReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";

const TableReservation = () => {
  const { TableList, isLoading, error } = useTableList();

  const [nameToDelete, setNameToDelete] = useState("");
  const { deleteTableReservation } = useDeleteReservation();
  const { updateReservation } = useUpdateReservation();
  const [filterDate, setFilterDate] = useState(""); // State for filter date
  const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword
  const [sortedTableList, setSortedTableList] = useState([]); // State for sorted table list
  const [sortOrder, setSortOrder] = useState("asc"); // State for sort order


  const [IdToUpdate, setIdToUpdate] = useState("");
  const [Date, setDate] = useState("");
  const [Name, setName] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");

  useEffect(() => {
    // Filter TableList based on filterDate
    const filteredData = TableList.filter(
      (table) => table.Date.includes(filterDate)
    );

    // Apply search filtering based on searchKeyword
    const searchedData = filteredData.filter((table) =>
      table.Name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    // Apply sorting based on sortOrder
    const sortedData = searchedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.Date) - new Date(b.Date);
      } else {
        return new Date(b.Date) - new Date(a.Date);
      }
    });

    setSortedTableList(sortedData);
  }, [TableList, filterDate, searchKeyword, sortOrder]);


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

   // Function to handle filtering
   const handleFilter = (e) => {
    setFilterDate(e.target.value);
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  // Function to handle sorting
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };


  const handleDelete = async () => {
    await deleteTableReservation(nameToDelete);
    console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  return (
    
    <div>
      <h1 className="mb-4 mt-5">My Reservations</h1>


      {/* Filter, Search, and Sort Inputs */}
      <div className="mb-3">
        <label className="me-2">Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={handleFilter}
          className="form-control me-3"
          placeholder="YYYY-MM-DD"
        />
        <label>Search by Name:</label>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleSearch}
          className="form-control me-3"
          placeholder="Search..."
        />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSort}
        >
          {sortOrder === "asc" ? "Sort Asc" : "Sort Desc"}
        </button>
      </div>



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
                      Update Details
                    </a>
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
