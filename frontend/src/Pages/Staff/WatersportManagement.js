import React, { useState } from "react";

import useActivityList from "../../hooks/useActivityList";
import useActivityDelete from "../../hooks/useDeleteActivity";
import ReceptionNavbar from "../../components/receptionNavbar";

function WatersportManage() {
  const { ActivityList, isLoading, error } = useActivityList();
  const { deleteActivity } = useActivityDelete();
  const [nameToDelete, setNameToDelete] = useState("");

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
    await deleteActivity(nameToDelete);
    //console.log(isLoading, "handleDelete loading");
    setNameToDelete("");
  };

  return (
    <div className="row p-0">
      <ReceptionNavbar />
      <div className="col">
        <div>
          <h1 className="mb-4 mt-5">Watersport Activities</h1>

          <a href="/AddActivity" className="btn btn-info mb-5">
            Add New Activity
          </a>

          <div className="row d-flex align-items-center justify-content-around mb-3">
            {/* <div className="row"> */}
              {ActivityList.map((Watersport) => (
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      {Watersport.Image && Watersport.Image.data && (
                        <img
                          style={{ width: "10rem" }}
                          src={`data:${
                            Watersport.Image.contentType
                          };base64,${btoa(
                            String.fromCharCode.apply(
                              null,
                              Watersport.Image.data.data
                            )
                          )}`}
                          className="card-img-top mb-1"
                          alt={Watersport.Activity}
                        />
                      )}
                      <h5 className="card-title">{Watersport.Activity}</h5>
                      <p className="card-text">{Watersport.Time}</p>
                      <p className="card-text">Rs.{Watersport.Price}.00</p>
                      <p className="card-text">{Watersport.Description}</p>
                      <a
                        href="#"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal"
                        onClick={() => setNameToDelete(Watersport._id)}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            {/* </div> */}
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
                Are you sure you want to delete this Activity?
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
                    DELETE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatersportManage;
