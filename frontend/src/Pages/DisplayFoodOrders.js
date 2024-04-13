import { useEffect, useState } from "react";
import useOrderList from "../hooks/useDisplayFoodOrders";
import useDeleteFoodOrders from "../hooks/useDeleteFoodOrders";

const DisplayOrders = () => {
  const { OrderList, isLoading, error } = useOrderList();

  const [idToDelete, setidToDelete] = useState("");
  const { deleteFoodOrders } = useDeleteFoodOrders();

  const [Name, setName] = useState("");
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

 /* const getUpdateData = (Table) => {
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
*/
  const handleDelete = async () => {
    await deleteFoodOrders(idToDelete);
    console.log(isLoading, "handleDelete loading");
    setidToDelete("");
  };

  return (
    
    <div>
      <h1 className="mb-4 mt-5">My Orders</h1>

      <div className="d-flex align-items-center justify-content-around mb-3">
        <table className="table" style={{ width: "75rem" }}>
          <tr className="border border-black" scope="col">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No</th>

            <th></th>
          </tr>

          {OrderList.map((Order) => (
            <tbody key={Order._id}>
              <tr className="border border-black" scope="col">
                
                <td>
                  (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="Text"
                      name="Name"
                      defaultValue={Order.Name}
                      disabled=""
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Order.Name}</td>
                  )
                </td>

                <td>
                  (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="email"
                      name="email"
                      defaultValue={Order.email}
                      disabled=""
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Order.email}</td>
                  )
                </td>

                <td>
                  (
                    <input
                      className="tabledit-input form-control input-sm"
                      type="Number"
                      name="contactNumber"
                      defaultValue={Order.contactNumber}
                      disabled=""
                      onChange={(e) => {
                        setcontactNumber(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Order.contactNumber}</td>
                  )
                </td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary "
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    onClick={() =>  setidToDelete(Order._id)}
                  >
                    Cancel Order
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

export default DisplayOrders;
