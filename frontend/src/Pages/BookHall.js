import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookHall = () => {
  const [hallReserves, setHallReserves] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:4000/hallR/hallres');
      if (!response.ok) {
        throw new Error('Failed to fetch hall bookings');
      }
      const data = await response.json();
      setHallReserves(data.data);
    } catch (error) {
      console.error('Error fetching hall bookings:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/hallR/hallres/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete hall booking');
      }
      // If deletion is successful, refetch the bookings to update the UI
      fetchBookings();
    } catch (error) {
      console.error('Error deleting hall booking:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h1 className="fw-bold display-4">Hall Bookings</h1>
      </div>
      <div className="row">
        {hallReserves ? (
          hallReserves.map((hallReserve) => (
            <div key={hallReserve._id} className="col-md-4 mb-4">
              <div className="card rounded h-100 bg-light-blue hover-bg-light-blue serif">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{hallReserve.hall}</h5>
                  <p className="card-text">Event Type: {hallReserve.eventtype}</p>
                  <p className="card-text">Capacity: {hallReserve.capacity}</p>
                  <p className="card-text">Selected Date: {hallReserve.selectdate}</p>
                  <p className="card-text">From Time: {hallReserve.fromTime}</p>
                  <p className="card-text">To Time: {hallReserve.toTime}</p>
                  {hallReserve.Resources && hallReserve.Resources.length > 0 ? (
                    <div>
                      <p className="card-text">Resources:</p>
                      <ul>
                        {hallReserve.Resources.map((resource, index) => (
                          <li key={index}>{resource.arrangementStyle}, {resource.foodArrangement}, {resource.barArrangement}, {resource.decorArrangement}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No resources picked</p>
                  )}
                  <div className="mt-auto d-flex justify-content-end">
                    <Link to={`/editBooking/${hallReserve._id}`} className="btn btn-primary me-2">Edit</Link>
                    <Link to={`/editBooking/${hallReserve._id}`} className="btn btn-primary me-2">View</Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(hallReserve._id)}
                    >
                      Delete
                    </button>
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
  );
};

export default BookHall;
