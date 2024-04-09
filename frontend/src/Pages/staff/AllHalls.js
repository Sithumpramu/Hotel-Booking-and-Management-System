import React, { useState, useEffect } from 'react';
import "./halllist.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import SearchHeader from '../../components/SearchHeader';
import Footer from '../../components/Footer';
import NewHallDash from '../../components/NewHallDash';


const AllHallList = () => {
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
    <div className="imadethis">
<SearchHeader />
      <div className="container">
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
      </div>
    </div>
  );
};

export default AllHallList;
