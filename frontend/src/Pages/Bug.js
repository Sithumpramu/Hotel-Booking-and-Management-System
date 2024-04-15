import React, { useRef, useEffect } from 'react';

function Bug() {
  const myInputRef = useRef(null);

  useEffect(() => {
    // Focus on the input when the modal is shown
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, []); // This effect runs once after the initial render

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <p>are you sure u want to delete </p>
          
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bug;
