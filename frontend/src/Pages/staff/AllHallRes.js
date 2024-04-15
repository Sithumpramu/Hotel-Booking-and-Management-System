import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminBookHall = () => {
  const [hallReserves, setHallReserves] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');

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

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  const filteredReservations = hallReserves
    ? hallReserves.filter((reservation) => {
        const dateMatch = !selectedDate || reservation.selectdate === selectedDate;
        const emailMatch = !selectedEmail || reservation.email === selectedEmail;
        return dateMatch && emailMatch;
      })
    : [];

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h1 className="fw-bold display-4 serif">All user Reservations</h1>
        <input
          type="date"
          className="form-control mb-2"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Filter by email"
          value={selectedEmail}
          onChange={handleEmailChange}
        />
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User</th>
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
            {filteredReservations.length > 0 ? (
              filteredReservations.map((hallReserve) => (
                <tr key={hallReserve._id}>
                  <td>{hallReserve.email}</td>
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
                <td colSpan="8" className="text-center">No matching reservations found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookHall;
