import React, { useState } from 'react'; // Import useState
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const HallReservationForm = () => {
  const [formData, setFormData] = useState({ // Define formData and setFormData using useState
    bookingName: '',
    eventType: '',
    capacity: '',
    arrangementStyle: '',
    foodArrangement: '',
    barArrangement: '',
    decorArrangement: '',
  });

  const [cateringNeeded, setCateringNeeded] = useState(false); // Define cateringNeeded and setCateringNeeded using useState
  const [decorNeeded, setDecorNeeded] = useState(false); // Define decorNeeded and setDecorNeeded using useState

  const handleInputChange = (e) => { // Define handleInputChange function
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCateringChange = (e) => { // Define handleCateringChange function
    setCateringNeeded(e.target.checked);
  };

  const handleDecorChange = (e) => { // Define handleDecorChange function
    setDecorNeeded(e.target.checked);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const selectedDate = searchParams.get('selectedDate');
  const fromTime = searchParams.get('fromTime');
  const toTime = searchParams.get('toTime');
  const hallName = searchParams.get('hallName');

  let totalHours = '';
 
  const fromMoment = moment(fromTime, 'HH.mm');
  const toMoment = moment(toTime, 'HH.mm');

  if (fromMoment.isValid() && toMoment.isValid()) {
    const totaltime = moment.duration(toMoment.diff(fromMoment));
    totalHours = totaltime.asHours();
  } else {
    console.error('Invalid time format');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set the fixed userid and hallid
    const userid = '65f47fd2435e6437ddcb9eb1';
    const hallid = '66091b49a3b21f794f0e29aa';

    try {
        // Construct the reservation data object
        const reservationData = {
            hall:formData.bookingName,
            hallid: hallid,
            userid: userid,
            eventtype: formData.eventType,
            capacity: formData.capacity,
            selectdate: selectedDate,
            fromTime: fromTime,
            toTime: toTime,
            totalhours: totalHours,
            status: 'booked',
            Resources: [{
              arrangementStyle: formData.arrangementStyle,
              foodArrangement: cateringNeeded ? formData.foodArrangement : null,
              barArrangement: cateringNeeded ? formData.barArrangement : null,
              decorArrangement: decorNeeded ? formData.decorArrangement : null,
                // Add other resources as needed
            }
            ]
        };

        // Log the constructed reservation data
        console.log('Sending reservation data:', reservationData);

        // Make the POST request to the backend API
        const response = await fetch('http://localhost:4000/hallR/addres', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to create reservation');
        }

        // Parse the response data
        const data = await response.json();
        console.log('Reservation created:', data);
        // Optionally, you can handle the response according to your application's needs
    } catch (error) {
        console.error('Error creating reservation:', error.message);
        // Optionally, you can handle errors gracefully (e.g., displaying an error message to the user)
    }
};


  return (
    <div className="container mt-5 serif bold">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>Booking Details For {hallName}</h3>
        <p>From Time: {fromTime}</p>
        <p>To Time: {toTime}</p>
       
        <div className="mb-3">
          <input
            type="text"
            placeholder="Booking Name"
            name="bookingName"
            value={formData.bookingName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Event Type"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <p className="form-control">Selected Date: {selectedDate}</p>
          <input type="hidden" name="selectDate" value={selectedDate} />
        </div>
        <div className="mb-3">
          <p className="form-control">From Time: {fromTime}</p>
          <input type="hidden" name="fromTime" value={fromTime} />
        </div>
        <div className="mb-3">
          <p className="form-control">To Time: {toTime}</p>
          <input type="hidden" name="toTime" value={toTime} />
        </div>
        <div className="mb-3">
          <p className="form-control">Total Time: {totalHours} hours </p>
          <input type="hidden" name="totalHours" value={totalHours} />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select
            name="arrangementStyle"
            value={formData.arrangementStyle}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select Arrangement Style</option>
            <option value="theatre">Theatre</option>
            <option value="boardroom">Boardroom</option>
            <option value="banquet">Banquet</option>
          </select>
        </div>
         {/* Catering */}
        <h3>Catering</h3>
        <div className="mb-3">
          <input
            type="checkbox"
            id="cateringSwitch"
            checked={cateringNeeded}
            onChange={handleCateringChange}
            className="form-check-input"
          />
          <label htmlFor="cateringSwitch" className="form-check-label">
            Catering Needed
          </label>
        </div>
        {cateringNeeded && (
          <>
            <div className="mb-3">
              <select
                name="foodArrangement"
                value={formData.foodArrangement}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select Food Arrangement</option>
                <option value="buffet">Buffet</option>
                <option value="plated">Plated</option>
                <option value="custom">Custom Menu</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                name="barArrangement"
                value={formData.barArrangement}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select Bar Arrangement</option>
                <option value="open">Open Bar</option>
                <option value="cash">Cash Bar</option>
                <option value="limited">Limited Bar</option>
              </select>
            </div>
          </>
        )}

        {/* Decor */}
        <h3>Decor</h3>
        <div className="mb-3">
          <input
            type="checkbox"
            id="decorSwitch"
            checked={decorNeeded}
            onChange={handleDecorChange}
            className="form-check-input"
          />
          <label htmlFor="decorSwitch" className="form-check-label">
            Decoration Needed
          </label>
        </div>
        {decorNeeded && (
          <div className="mb-3">
            <select
              name="decorArrangement"
              value={formData.decorArrangement}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select Decoration Arrangement Style</option>
              <option value="modern">Modern</option>
              <option value="vintage">Vintage</option>
              <option value="rustic">Rustic</option>
            </select>
          </div>
        )}

      
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>For further details please email or contact us</p>
    </div>
  );
};

export default HallReservationForm;