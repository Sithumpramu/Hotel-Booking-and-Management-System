import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useActivityList from "../../hooks/useActivityList";

function SelectActivity() {
  const { ActivityList, isLoading, error } = useActivityList();
  const navigate = useNavigate();

  const [idList, setIdList] = useState([]);

  const handleAddClick = (activityIds) => {
    // Navigate to the next page and pass the activityId
    navigate("/WatersportsReservation", { state: { activityIds } });
  };

  //const [isDisabled, setIsDisabled] = useState(false);

  // const disable = () => {
  //   setIsDisabled(true);
  //   // Add any other logic you need to handle when the button is clicked
  // };

  // if (isLoading) {
  //   return (
  //     <div className="alert alert-primary" role="alert">
  //       Loading...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const getActivities = (event, id) => {
    const checked = event.target.checked;
    if (checked) {
      const ids = idList;
      ids.push(id);
      setIdList(ids);
    } else {
      const ids = idList;
      const filteredIdList = ids.filter((filterId) => filterId === id);
      setIdList(filteredIdList);
    }
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 mt-5">Watersport Activities</h1>

        <div className="d-flex align-items-center justify-content-around mb-3">
          <table className="table" style={{ width: "35rem" }}>
            <tr>
              <td></td>
              <th scope="col">Activity Name</th>
              <th scope="col">Estimated Time</th>
              <th scope="col">Price</th>
            </tr>

            {ActivityList.map((Watersport) => (
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      onClick={(event) => getActivities(event, Watersport._id)}
                    ></input>
                  </td>
                  <td>{Watersport.Activity}</td>
                  <td>{Watersport.Time}</td>
                  <td>Rs.{Watersport.Price}.00</td>
                  {/* <td>
                    <button className="btn btn-primary">Add</button>
                  </td> */}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleAddClick(idList)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectActivity;
