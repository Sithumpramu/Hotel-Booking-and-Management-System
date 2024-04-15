import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useHallData from "../../hooks/useHallData";

const EditHall = () => {
  // Get the hall id from the URL params
  const { id } = useParams();

  // Use custom hook to fetch hall data and manage form state
  const {
    hallData,
    loading,
    errorMessage,
    priceError,
    handleInputChange,
    handlePriceChange,
    handlePictureUpload,
    handleSubmit,
    setShowNotification,
  } = useHallData(id);

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // State to manage modal visibility
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
     // Prevent default form submission behavior
    setShowConfirmationModal(true); // Show confirmation modal when form is submitted
  };

  // Function to confirm the update
  const confirmUpdate = (e) => {
    handleSubmit(e); // Submit the form data
    setSuccessMessage("Hall updated successfully!");
    setShowConfirmationModal(false); // Hide the confirmation modal
  };

  // Display loading state while fetching hall data
  if (loading || !hallData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container">
        <div className="mt-5 mb-4">
          <h1 className="fw-bold display-4 text-light-blue serif">Edit Hall</h1>
        </div>

        {/* Display error messages if any */}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {priceError && <div className="alert alert-danger">{priceError}</div>}

        {/* Form for editing hall */}
        <form onSubmit={handleFormSubmit}>
          <div className="rounded-container">
            {/* Display success message if any */}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}

            {/* Input fields for hall details */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control textarea-input"
                id="name"
                name="Name"
                value={hallData.Name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control rounded textarea-input"
                id="description"
                name="description"
                value={hallData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="facilities" className="form-label rounded-pill">
                Facilities:
              </label>
              <input
                type="text"
                className="form-control textarea-input"
                id="facilities"
                name="facilities"
                value={Array.isArray(hallData.facilities) ? hallData.facilities.join(", ") : ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="capacity" className="form-label">
                Capacity:
              </label>
              <input
                type="number"
                className="form-control textarea-input"
                id="capacity"
                name="capacity"
                value={hallData.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <label htmlFor="price" className="form-label">
                Price in Rs:
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={hallData.price}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handlePriceChange(1)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handlePriceChange(-1)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="picture" className="form-label">
                Picture:
              </label>
              <input
                type="file"
                className="form-control"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(e) => handlePictureUpload(e.target.files[0])}
              />
            </div>
            {/* Other input fields */}
            {/* ... */}

            {/* Save Changes button */}
            <div className="mb-3 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-save-changes"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      <div className={`modal fade ${showConfirmationModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showConfirmationModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button type="button" className="btn-close" onClick={() => setShowConfirmationModal(false)}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to update the hall details?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => setShowConfirmationModal(false)}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={confirmUpdate}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHall;
