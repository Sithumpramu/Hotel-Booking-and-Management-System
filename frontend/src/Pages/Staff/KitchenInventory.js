import React, { useState} from 'react';
import useKitchenStockDisplay from '../../hooks/useKitchenStockDisplay';
import useDeleteStock from '../../hooks/useDeleteStock';

function KitchenInventory () {
    const {StockList, isLoading, error} = useKitchenStockDisplay();
    const { deleteStock } = useDeleteStock();
  const [nameToDelete, setNameToDelete] = useState("");


    if (isLoading) {
        return <div className="alert alert-primary" role="alert">Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
      const handleDelete = async () => {
        await deleteStock(nameToDelete);
       
        setNameToDelete("");
      };
    
      return (
        <div>
          <div>
            <h1 className="mb-4 mt-5">Kitchen Inventory</h1>
    
            <a href="/AddStock" className="btn btn-primary mb-5">
              Add New Stock
            </a>
    
            <div className="d-flex align-items-center justify-content-around mb-3">
              {StockList.map((Stock) => (
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    
                    <h5 className="card-title">{Stock.name}</h5>
                    <p className="card-text">{Stock.category}</p>
                    <p className="card-text">{Stock.quantity}g</p>
                    <p className="card-text">Rs.{Stock.price}.00</p>
                    <p className="card-text">{Stock.description}</p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#Modal"
                      onClick={() => setNameToDelete(Stock.name)}
                    >
                      Delete
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#Modal"
                      style={{ margin: "2rem" }}
                    >
                      Update
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* model  */}
      <div
        className="modal fade"
        id="Modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                CAUTION
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this Activity?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <form action="" method="delete">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  DELETE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

          </div>
);
}

export default KitchenInventory;

