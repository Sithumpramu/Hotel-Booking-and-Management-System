

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminBookHall = () => {
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
        <h1 className="fw-bold display-4 serif">All user Reservations</h1>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
            <th scope="col">user</th>
              <th scope="col">Hall</th>
              <th scope="col">Event Type</th>
              <th scope="col">Capacity</th>
              <th scope="col">Selected Date</th>
              <th scope="col">From Time</th>
              <th scope="col">To Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hallReserves ? (
              hallReserves.map((hallReserve) => (
                <tr key={hallReserve._id}>
                    <td>{hallReserve.userid}</td>
                  <td>{hallReserve.hall}</td>
                  <td>{hallReserve.eventtype}</td>
                  <td>{hallReserve.capacity}</td>
                  <td>{hallReserve.selectdate}</td>
                  <td>{hallReserve.fromTime}</td>
                  <td>{hallReserve.toTime}</td>
                  <td>
                    <Link to={`/editBooking/${hallReserve._id}`} className="btn btn-primary me-2">Edit</Link>
                    <Link to={`/editBooking/${hallReserve._id}`} className="btn btn-primary me-2">View</Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(hallReserve._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookHall;
