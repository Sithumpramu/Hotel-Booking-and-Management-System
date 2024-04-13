import React, { useState, useEffect, useContext } from 'react';
import "./halllist.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'; // Import the AuthContext
import SearchHeader from '../../components/SearchHeader';

const AllHallList = () => {
  const [halls, setHalls] = useState(null);
  const { user } = useContext(AuthContext); // Access user state from AuthContext

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

  const handleReserveNow = () => {
    // Check if user is logged in
    if (!user) {
      // Ask for confirmation
      const confirmed = window.confirm('You are not logged in. Please log in to reserve a hall.');
      if (confirmed) {
        // If user confirms, navigate to login page
        window.location.href = "/login";
      }
    }
  };

  return (
    <div className="imadethis">
      <SearchHeader />
      <div className="container">
        {/* Card for Check Availability */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card bg-light-blue text-black">
              <div className="card-body">
                <h5 className="card-title">Check Availability</h5>
                <p className="card-text">Check availability for your event date.</p>
                <Link to="/availability" className="btn btn-primary">Check Now</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5 mb-4">
          <h1 className="fw-bold display-4 text-light-blue serif">Book a venue</h1>
        </div>
        <div className="row">
          {halls ? (
            halls.map((hall) => (
              <div key={hall._id} className="col-md-4 mb-4">
                <div className="card  rounded h-100 bg-light-blue hover-bg-light-blue serif">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold"> {hall.Name}</h5>
                    <p className="card-text"> {hall.description}</p>
                    <p className="card-text">Capacity: {hall.capacity}</p>
                    <p className="card-text">Price: {hall.price}</p>
                    <div className="d-flex mt-auto justify-content-end">
                      <Link to={`/ViewHall/${hall._id}`} className="btn btn-primary rounded-pill me-2" style={{ minWidth: '100px' }}>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="fs-5 fw-light italic">Loading...</p>
          )}
        </div>
        {/* Reserve Now Button */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={handleReserveNow}>Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHallList;