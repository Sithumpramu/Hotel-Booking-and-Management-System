import React, { useState} from 'react';
import useKitchenStockDisplay from '../../hooks/useKitchenStockDisplay';
import useDeleteStock from '../../hooks/useDeleteStock';
import useUpdateStock from '../../hooks/useUpdateStock';

function KitchenInventory () {
    const {StockList, isLoading, error} = useKitchenStockDisplay();
    const { deleteStock } = useDeleteStock();
    const { updateStock } = useUpdateStock();
    const [nameToDelete, setNameToDelete] = useState("");
    const [nameToUpdate, setNameToUpdate] = useState("");
    const [saveUpdate, setSaveUpdate] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


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

      const getUpdateStock = (Stock) => {
        setNameToUpdate(Stock._id);
        setName(Stock.name);
        setCategory(Stock.category);
        setQuantity(Stock.quantity);
        setPrice(Stock.price);
        setDescription(Stock.description);
      };

      const updateDetails = async () => {
        await updateStock(nameToUpdate,name, category,quantity, price,description );
      };

      

    
     /* return (
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
                      data-bs-target="#Modal2"
                      style={{ margin: "2rem" }}

                    >
                      Update
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* model  }
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
      <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
          <div className="modal-dialog">
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Stock Update</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value);}}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">New Password:</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Enter New password" onChange={(e)=>{setNewPassword(e.target.value);}} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
                  <button className="btn btn-outline-primary" type="submit" disabled={isLoading}>Update</button>
                  
               
              </div>
            </div></form>
          </div>
</div>

          </div>
);*/
return (
  <div>
    <div>
      <h1 className="mb-4 mt-5">Kitchen Inventory</h1>
      <a href="/AddStock" className="btn btn-primary mb-5">
              Add New Stock
            </a>

      <div className="d-flex align-items-center justify-content-around mb-3">
        <table className="table" style={{ width: "75rem" }}>
          <tr>
            <th className="border border-black" scope="col">
              Product Name
            </th>
            <th className="border border-black" scope="col">
              Product Category
            </th>
            <th className="border border-black" scope="col">
              Quantity Available
            </th>
            <th className="border border-black" scope="col">
              Latest Purchased Price At
            </th>
            <th className="border border-black" scope="col">
              SpeciaNotes
            </th>
            <th></th>
            <th></th>
          </tr>

          {StockList.map((Stock) => (
            <tbody key={Stock._id}>
              <tr>
                <td>
                  {nameToUpdate === Stock._id ? (
                    <input
                      class="tabledit-input form-control input-sm"
                      type="text"
                      name="name"
                      defaultValue={Stock.name}
                      disabled=""
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Stock.name}</td>
                  )}
                </td>

                <td>
                  {nameToUpdate === Stock._id ? (
                    <input
                      class="tabledit-input form-control input-sm"
                      type="text"
                      name="category"
                      defaultValue={Stock.category}
                      disabled=""
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Stock.category}</td>
                  )}
                </td>

                <td>
                  {nameToUpdate === Stock._id ? (
                    <input
                      class="tabledit-input form-control input-sm"
                      type="number"
                      name="quantity"
                      defaultValue={Stock.quantity}
                      disabled=""
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Stock.quantity}</td>
                  )}
                </td>

                <td>
                  {nameToUpdate === Stock._id ? (
                    <input
                      class="tabledit-input form-control input-sm"
                      type="number"
                      name="price"
                      defaultValue={Stock.price}
                      disabled=""
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Stock.price}</td>
                  )}
                </td>

                <td>
                  {nameToUpdate === Stock._id ? (
                    <input
                      class="tabledit-input form-control input-sm"
                      type="text"
                      name="description"
                      defaultValue={Stock.description}
                      disabled=""
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <td>{Stock.description}</td>
                  )}
                </td>

                <td>
                  <a
                    href="#"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    onClick={() => setNameToDelete(Stock.name)}
                  >
                    DELETE
                  </a>
                </td>

                <td>
                  {nameToUpdate === Stock._id ? (
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => updateDetails()}
                    >
                      Save
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => getUpdateStock(Stock)}
                    >
                      Update
                    </a>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
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
            Are you sure you want to delete?
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

