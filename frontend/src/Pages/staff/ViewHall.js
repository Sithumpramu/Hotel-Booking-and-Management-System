import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./halllist.css"; // Import custom CSS file for additional styling

const ViewHall = () => {
  const { id } = useParams(); // Extract the id parameter from the URL
  const [hall, setHall] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHall = async () => {
      try {
        const response = await fetch(`http://localhost:4000/hall/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hall");
        }
        const data = await response.json();
        setHall(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hall data:", error);
        setLoading(false);
      }
    };
    fetchHall();
  }, [id]); // Make sure to re-run the effect whenever the id changes

  return (
    <div className="container">
      <div className="mt-5 mb-4">
        <h1 className="fw-bold display-4 text-light-blue serif">Hall Details</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Carousel for Photos */}
          <div className="d-flex justify-content-center">
            <div id="hallCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner">
                {hall.photos.map((photo, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={photo} className="d-block w-100" style={{ width: '600px', height: '399px', objectFit: 'cover' }} alt={`Hall Photo ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#hallCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#hallCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-4 text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>Description:</h2>
            <p style={{ wordWrap: 'break-word' }}>{hall.description}</p>
          </div>

          {/* Facilities */}
          <div className="mb-4">
            <h2>Facilities:</h2>
            <p>{hall.facilities.join(', ')}</p>
          </div>

          {/* Capacity */}
          <div className="mb-4">
            <h2>Capacity:</h2>
            <p>{hall.capacity}</p>
          </div>

          {/* Price */}
          <div>
            <h2>Price:</h2>
            <p>{hall.price}</p>
          </div>

          {/* Availability Check Card */}
          <div className="card position-fixed bottom-0 end-0 m-3" style={{ maxWidth: '300px' }}>
            <div className="card-body">
              <h5 className="card-title">Check Availability</h5>
              <p className="card-text">Click here to check availability for your dates</p>
              <button className="btn btn-secondary">Check Availability</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewHall;
