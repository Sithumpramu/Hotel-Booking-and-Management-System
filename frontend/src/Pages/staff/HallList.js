import React, { useEffect, useState } from "react";
import "./halllist.css"; // Import custom CSS file for additional styling
import { Link } from "react-router-dom"

const HallList = () => {
  const [halls, setHalls] = useState(null);

  useEffect(() => {
    const fetchHall = async () => {
      try {
        const response = await fetch("http://localhost:4000/hall/");
        if (!response.ok) {
          throw new Error("Failed to fetch halls");
        }
        const json = await response.json();
        setHalls(json);
      } catch (error) {
        console.error("Error fetching halls data:", error);
      }
    };
    fetchHall();
  }, []);

  return (
    <div className="container">
      <div className="mt-5 mb-4">
        <h1 className="fw-bold display-4 text-light-blue serif">All Available Halls</h1>
      </div>
      <div className="row">
        {halls ? (
          halls.map((hall) => (
            <div key={hall._id} className="col-md-4 mb-4">
              <div className="card border-primary rounded h-100 bg-light-blue hover-bg-light-blue serif">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold"> {hall.Name}</h5>
                  <p className="card-text"> {hall.description}</p>
                  <p className="card-text">Capacity: {hall.capacity}</p>
                  <p className="card-text">Price: {hall.price}</p>
                  <Link to={`/ViewHall/${hall._id}`} className="btn btn-primary rounded-pill mt-auto align-self-end">
                    View
                  </Link>
                  <Link to={`/EditHall/${hall._id}`} className="btn btn-primary rounded-pill mt-auto align-self-end">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="fs-5 fw-light italic">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HallList;
