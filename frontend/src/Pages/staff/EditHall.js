import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./halllist.css"; // Import custom CSS file for additional styling

const EditHall = () => {
  const { id } = useParams();
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
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHall({ ...hall, [name]: value });
    const newValue = name === 'facilities' ? value.split(',').map(item => item.trim()) : value;
    setHall({ ...hall, [name]: newValue });
  };

  const handlePriceIncrement = () => {
    setHall({ ...hall, price: parseFloat(hall.price) + 1 });
  };

  const handlePriceDecrement = () => {
    setHall({ ...hall, price: parseFloat(hall.price) - 1 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/hall/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hall),
      });
      if (!response.ok) {
        throw new Error("Failed to update hall");
      }
      console.log("Hall updated successfully");
      // Optionally, handle successful update (e.g., show success message)
    } catch (error) {
      console.error("Error updating hall:", error);
    }
  };

  if (loading || !hall) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="mt-5 mb-4">
        <h1 className="fw-bold display-4 text-light-blue serif">Edit Hall</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control textarea-input" id="name" name="Name" value={hall.Name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control rounded textarea-input" id="description" name="description" value={hall.description} onChange={handleInputChange}></textarea>
        </div>
        <div className="mb-3">
  <label htmlFor="facilities" className="form-label rounded-pill">Facilities:</label>
  <input type="text" className="form-control textarea-input" id="facilities" name="facilities" value={Array.isArray(hall.facilities) ? hall.facilities.join(', ') : ''} onChange={handleInputChange} />
</div>

        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">Capacity:</label>
          <input type="number" className="form-control textarea-input" id="capacity" name="capacity" value={hall.capacity} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <div className="input-group">
            <span className="input-group-text">${hall.price}</span>
            <button className="btn btn-outline-secondary" type="button" onClick={handlePriceIncrement}>+</button>
            <button className="btn btn-outline-secondary" type="button" onClick={handlePriceDecrement}>-</button>
          </div>
        </div>
        <button type="submit" className="btn btn-save-changes">Save Changes</button>
      </form>
    </div>
  );
};

export default EditHall;

