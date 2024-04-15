import { useEffect, useState } from "react";
import useDisplayBuffet from '../../hooks/useDisplayBuffet'
import useDeleteBuffet from '../../hooks/useDeleteBuffet'

const ManageBuffet = () => {
  const { buffetItems, isLoading, error } = useDisplayBuffet();
  const [id, setidToDelete] = useState("");
  const { deleteBuffetItem } = useDeleteBuffet();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = async () => {
    await deleteBuffetItem(id);
    console.log(isLoading, "handleDelete loading");
    setidToDelete("");
  };

  return (
    <div>
     <h1 class="topic mb-5">Buffet Management</h1>
      <div className='card'>
        
        {buffetItems.map((item) => (
            <div className='card'>
          <div key={item._id}>
            <h2>{item.BuffetName}</h2>
            <p>{item. Description}</p>
            <h4>{item.Time}</h4>
            <h5>Price: Rs.{item.Price}.00</h5>
            <button
                    type="button"
                    class="btn btn-primary  mt-5"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    onClick={() => setidToDelete(item._id)}
                  >
                    Delete Buffet Details
                  </button>
                  <a className="btn btn-primary"
                      onClick={() => setidToDelete(item._id)}
                      href="/updateBuffet"
                    >Update</a>

            {/* Add more details as needed */}
          </div></div>
        ))}
      </div>
    
    {/*delete model  */}
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
          Are you sure you want to delete this Buffet Details?
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
              CANCEL
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ManageBuffet;