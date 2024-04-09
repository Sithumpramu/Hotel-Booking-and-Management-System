import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

const HallReservationForm = () => {
  const [formData, setFormData] = useState({
    Email: '',
    date: '',
    startTime: '',
    EndTime: '',
    hallName: '',
    Resources: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleStartTimeChange = (time) => {
    setFormData(prevState => ({
      ...prevState,
      startTime: time
    }));
  };

  const handleEndTimeChange = (time) => {
    setFormData(prevState => ({
      ...prevState,
      EndTime: time
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/hallres/addres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add reservation');
      }
      alert('Reservation added successfully');
      // Reset form fields after successful submission (optional)
      setFormData({
        Email: '',
        date: '',
        startTime: '',
        EndTime: '',
        hallName: '',
        Resources: []
      });
    } catch (error) {
      console.error('Error adding reservation:', error);
      alert('Failed to add reservation. Please try again.');
    }
  };

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4 pt-4 serif">Hall Reservation Form</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" name="Email" value={formData.Email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date:</label>
             
              <div className="input-group form-control">
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
                  className="form-control"
                />
                </div>
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">Start Time:</label>
              <input type="text" className="form-control" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange} />
             
            </div>
            <div className="mb-3">
              <label htmlFor="EndTime" className="form-label">End Time:</label>
              <input type="text" className="form-control" id="EndTime" name="EndTime" value={formData.EndTime} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="hallName" className="form-label">Hall Name:</label>
              <input type="text" className="form-control" id="hallName" name="hallName" value={formData.hallName} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Add Reservation</button>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default HallReservationForm;
