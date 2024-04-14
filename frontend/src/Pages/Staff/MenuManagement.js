

import React, { useState } from "react";
import useMenuList from "../../hooks/useMenu";
import useDeleteMenu from "../../hooks/useDeleteMenuItem";


function MenuItems() {
  const { menuList, isLoading, error } = useMenuList();
  const [ID, setIdToDelete] = useState("");
  const { deleteMenuItem } = useDeleteMenu();
  
  const [productName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [Image, setImage] = useState("");

  if (isLoading) {
    return (
      <div className="alert alert-primary" role="alert">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  const handleDelete = async () => {
    await deleteMenuItem(ID);
    //console.log(isLoading, "handleDelete loading");
    setIdToDelete('');
  };



  // const handleupdate = async (ID) => {

  //   setIdToDelete('');
  //   await updateMenuItem(ID)

  // }

  return (
    <div className="row p-0">
      <div className="col">
        <div>
          <h1 className="mb-4 mt-5">Menu</h1>

          <a href="/AddMenu" className="btn btn-info mb-5">
            Add New Menu
          </a>

          <div className="row d-flex align-items-center justify-content-around mb-3">
            {menuList.map((menu) => (
              <div key={menu._id} className="col-lg-3">
                <div className="card mb-4">
                  <div className="card-body">
                    {menu.Image && menu.Image.data && (
                      <img
                        style={{ width: "10rem" }}
                        src={URL.createObjectURL(
                          new Blob([menu.Image.data], {
                            type: menu.Image.contentType
                          })
                        )}
                        className="card-img-top mb-1"
                        alt={menu.productName}
                      />
                    )}
                    <h5 className="card-title">{menu.productName}</h5>
                    <p className="card-text fw-medium">
                      Rs.{menu.Price}.00
                    </p>
                    <p className="card-text fw-medium">{menu.category}</p>
                    <a
                      href="#"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#Modal"
                      onClick={() => setIdToDelete(menu._id)}
                    >
                      Delete Activity
                    </a>
                    <a className="btn btn-primary"
                      onClick={() => setIdToDelete(menu._id)}
                    >Update</a>
                  </div>
                </div>
              </div>
            ))}

            
            {/* </div> */}
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
    </div>
  );
}

export default MenuItems;