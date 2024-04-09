import React from "react";
import { useParams } from "react-router-dom";
import useHallData from "../../hooks/useHallData";

const EditHall = () => {
  const { id } = useParams();
  const {
    hallData,
    loading,
    showNotification,
    errorMessage,
    priceError,
    handleInputChange,
    handlePriceChange,
    handlePictureUpload,
    handleSubmit,
    setShowNotification,
  } = useHallData(id);

  if (loading || !hallData) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <div className="container">
        <div className="mt-5 mb-4">
          <h1 className="fw-bold display-4 text-light-blue serif">Edit Hall</h1>
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {priceError && <div className="alert alert-danger">{priceError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="rounded-container">
            {showNotification && (
              <div className="toast-container">
                <div
                  className="toast align-items-center text-white bg-primary"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="d-flex">
                    <div className="toast-body">
                      Hall updated successfully!
                    </div>
                    <button
                      type="button"
                      className="btn-close btn-close-white me-2 m-auto"
                      onClick={() => setShowNotification(false)}
                    ></button>
                  </div>
                </div>
              </div>
            )}
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
            <div className="mb-3 d-flex justify-content-end">
              <button type="submit" className="btn btn-save-changes">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
   
    </div>
  );
};

export default EditHall;
