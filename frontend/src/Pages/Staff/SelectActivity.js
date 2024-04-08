import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useActivityList from "../../hooks/useActivityList";
import ReceptionNavbar from "../../components/receptionNavbar";

function SelectActivity() {
  const { ActivityList, isLoading, error } = useActivityList();
  const navigate = useNavigate();

  const [idList, setIdList] = useState([]);

  const handleAddClick = (activityIds) => {
    // Navigate to the next page and pass the activityId
    navigate("/addWatersportsReservation", { state: { activityIds } });
  };

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
    <div className="row">
      <ReceptionNavbar />
      <div className="col">
        <div>
          <div>
            <h1 className="mb-4 mt-5">Watersport Activities</h1>

            <div className="d-flex align-items-center justify-content-around mb-3">
              <table className="table table-info" style={{ width: "50rem" }}>
                <tr>
                  <th></th>
                  <th className="border border-black" scope="col">
                    Activity Name
                  </th>
                  <th className="border border-black" scope="col">
                    Estimated Time
                  </th>
                  <th className="border border-black" scope="col">
                    Description
                  </th>
                  <th className="border border-black" scope="col">
                    Price
                  </th>
                </tr>

                {ActivityList.map((Watersport) => (
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          onClick={(event) =>
                            getActivities(event, Watersport.Activity)
                          }
                        ></input>
                      </td>

                      <td className="border border-black">
                        {Watersport.Activity}
                      </td>

                      <td className="border border-black">
                        {Watersport.Time}
                      </td>

                      <td className="border border-black">
                        {Watersport.Description}
                      </td>
                      
                      <td className="border border-black">
                        Rs.{Watersport.Price}.00
                      </td>
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
      </div>
    </div>
  );
}

export default SelectActivity;
