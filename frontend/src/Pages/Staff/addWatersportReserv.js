import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import useAddReserv from "../../hooks/useAddReserv";
import ReceptionNavbar from "../../components/receptionNavbar";

const AddReserv = () => {
  const location = useLocation();
  const activityIds = location.state?.activityIds;

  console.log(activityIds, "activityId");

  const [CusName, setCusName] = useState("");
  const [TelNo, setTelNo] = useState("");
  const [Address, setAddress] = useState("");
  const [checkinDate, setcheckinDate] = useState("");
  const [checkinTime, setcheckinTime] = useState("");
  const [Qty, setQty] = useState("");

  const { addReserv } = useAddReserv();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await addReserv(
      CusName,
      TelNo,
      Address,
      checkinDate,
      checkinTime,
      Qty,
      activityIds
    );
  };

  const validate = () => {
    const allFieldsFilled =
      CusName && TelNo && Address && checkinDate && checkinTime && Qty;
    const errorElement = document.getElementById("Error");
    if (!allFieldsFilled) {
      errorElement.innerHTML = "All fields must be filled.";
      return false;
    } else {
      errorElement.innerHTML = "";
      return true;
    }
  };

  return (
    <div className="row">
      <ReceptionNavbar />
      <div className="col">
        <div>
          <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
            <form
              onSubmit={handleSubmit}
              method="Post"
              style={{ width: "18rem" }}>
                
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  onChange={(e) => setCusName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contactNumber"
                  onChange={(e) => setTelNo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkinDate" className="form-label">
                  Check-in Date
                </label>
                <input
                  type="Date"
                  className="form-control"
                  id="checkinDate"
                  onChange={(e) => setcheckinDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkinTime" className="form-label">
                  Check-in Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="checkinTime"
                  onChange={(e) => setcheckinTime(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Qty" className="form-label">
                  No.of.people
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Qty"
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                id="submit"
                onClick={validate}
              >
                Submit
              </button>

              <p id="Error"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReserv;
