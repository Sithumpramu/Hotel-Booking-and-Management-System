import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import useAddReserv from "../../hooks/useAddReserv";
import ReceptionNavbar from "../../components/receptionNavbar";

const AddReserv = () => {
  const location = useLocation();
  const [activityList, setActivityList] = useState(
    location.state?.activityList || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  console.log(location.state, "location.state");
  console.log(activityList, "activityList");

  const [nameToUpdate, setNameToUpdate] = useState("");
  const [Qty, setQty] = useState(null);

  const getUpdateData = (activity) => {
    setNameToUpdate(activity.id);
    setQty(activity.Qty || activity.qtyPerRound);
  };

  const updateDetails = async (selectedActivity) => {
    const quantity = Qty && Number(Qty);

    console.log(quantity, typeof quantity, "qty");

    const updatedActivities = activityList.map((activity) => {
      if (activity.id === selectedActivity.id) {
        // Calculate the number of rides based on the updated quantity
        const noOfRides = Math.ceil(quantity / activity.qtyPerRound);
        const activityTPrice = Math.ceil(activity.Price * noOfRides);

        return {
          ...activity,
          Qty: quantity,
          noOfRides: noOfRides,
          activityTPrice: activityTPrice,
        };
      }
      return activity;
    });
    console.log(updatedActivities, "updatedActivities");
    setActivityList(updatedActivities);
    setNameToUpdate(null);
    setQty(null);
  };

  useEffect(() => {
    const total = activityList.reduce(
      (acc, activity) =>
        acc +
        activity.Price *
          (activity.noOfRides ||
            Math.ceil(
              (activity.Qty || activity.qtyPerRound) / activity.qtyPerRound
            )),
      0
    );
    setTotalPrice(total);
  }, [activityList]);

  const [CusName, setCusName] = useState("");
  const [TelNo, setTelNo] = useState("");
  const [Address, setAddress] = useState("");
  const [checkinDate, setcheckinDate] = useState("");
  const [checkinTime, setcheckinTime] = useState("");

  const { addReserv } = useAddReserv();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(activityList, "activityList");
    await addReserv(
      CusName,
      TelNo,
      Address,
      checkinDate,
      checkinTime,
      Qty,
      activityList
    );
  };

  const validate = () => {
    const allFieldsFilled =
      CusName && TelNo && Address && checkinDate && checkinTime;

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
          <h3>Selected Activities</h3>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
            <div className="row">
              <div className="col">
                <table style={{ width: "38rem" }}>
                  <tr className="border border-black" scope="col">
                    <th scope="col">Activity Name</th>
                    <th scope="col">Price per round</th>
                    <th scope="col">Qty per round</th>
                    <th scope="col">No.of.People</th>
                    <th scope="col">No.of.Rounds</th>
                    <th scope="col">Total Price</th>
                  </tr>

                  {activityList &&
                    activityList.map((activity) => (
                      <tbody key={activity.id}>
                        <tr className="border border-black" scope="col">
                          <td>{activity.id}</td>
                          <td>{activity.Price}</td>
                          <td>{activity.qtyPerRound}</td>
                          <td className="border border-black">
                            {nameToUpdate === activity.id ? (
                              <input
                                className="tabledit-input form-control input-sm"
                                type="number"
                                name="Qty"
                                value={Qty}
                                disabled=""
                                onChange={(e) => {
                                  setQty(e.target.value);
                                }}
                              ></input>
                            ) : (
                              activity.Qty || activity.qtyPerRound
                            )}

                            {nameToUpdate === activity.id ? (
                              <button
                                className="btn btn-primary"
                                onClick={() => updateDetails(activity)}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                onClick={() => getUpdateData(activity)}
                              >
                                Update
                              </button>
                            )}
                          </td>

                          <td>
                            {activity.noOfRides ||
                              Math.ceil(
                                (activity.Qty || activity.qtyPerRound) /
                                  activity.qtyPerRound
                              )}
                          </td>

                          <td>
                            {activity.Price *
                              Math.ceil(
                                (activity.Qty || activity.qtyPerRound) /
                                  activity.qtyPerRound
                              )}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>

                {/* display total bill */}
                <div>Total Bill: {totalPrice}</div>
              </div>

              <div className="col">
                <form
                  onSubmit={handleSubmit}
                  method="Post"
                  style={{ width: "18rem" }}
                >
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
                    <label htmlFor="checkinHour" className="form-label">
                      Check-in Hour
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="checkinHour"
                      min="0"
                      max="23" // For a 24-hour format; adjust if you're using a 12-hour format (e.g., min="1" max="12")
                      placeholder="Enter hour (0-23)"
                      onChange={(e) => {
                        // Ensure the value is within the expected range; adjust logic as needed for your application's requirements
                        const hour = Math.max(
                          0,
                          Math.min(23, Number(e.target.value))
                        );
                        setcheckinTime(`${hour}:00`); // Setting time in "HH:00" format. Adjust if you need a different formatting
                      }}
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
      </div>
    </div>
  );
};

export default AddReserv;
