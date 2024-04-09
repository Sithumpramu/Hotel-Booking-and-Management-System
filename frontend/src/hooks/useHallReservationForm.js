import { useState } from 'react';

const useHallReservationForm = () => {
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

  const handleSubmit = async () => {
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

  return { formData, handleChange, handleSubmit };
};

export default useHallReservationForm;
