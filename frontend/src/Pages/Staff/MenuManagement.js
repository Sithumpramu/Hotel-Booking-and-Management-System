

import React, { useState } from "react";
import useMenuList from "../../hooks/useMenu";
import useDeleteMenu from "../../hooks/useDeleteMenuItem";
import useUpdateMenu from "../../hooks/useUpdateMenuItem";


function MenuItems() {
  const { menuList, isLoading, error } = useMenuList();
  const [ID, setIdToDelete] = useState("");
  const { deleteMenuItem } = useDeleteMenu();
  const { updateMenu } = useUpdateMenu();
  
  const [IdToUpdate, setIdToUpdate] = useState("");
  const [productName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [category, setCategory] = useState("");
 
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

  const getUpdateMenu = (menu) => {
    setIdToUpdate(menu._id);
    setProductName(menu. productName);
    setPrice(menu.Price);
    setCategory(menu.category);
    
   
  };

  const updateDetails = async () => {
    await updateMenu(
      IdToUpdate,
      productName,
      Price,
      category,
      
      
    );
  };

  const bufferToBase64 = (buf) => {
    var binstr = Array.prototype.map
      .call(buf, function (ch) {
        return String.fromCharCode(ch);
      })
      .join("");
    return btoa(binstr);
  };

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
          <h1 className="mb-4 mt-5">Menu Management</h1>

          <a href="/AddMenu" className="btn btn-info mb-5">
            Add New Menu Item
          </a>

          <div className="row d-flex align-items-center justify-content-around mb-3">
            {menuList.map((menu) => (
              <div key={menu._id} className="col-lg-3">
                <div className="card mb-4">
                  <div className="card-body">
                    {menu.Image && menu.Image.data && (
                      <img
                      style={{ width: "10rem" }}
                      src={`data:${
                        menu.Image.contentType
                      };base64,${bufferToBase64(menu.Image.data.data)}`}
                      className="card-img-top mb-1"
                      alt={menu.Image}
                    />
                    )}
                    <h5 className="card-title">{menu.productName}
                    </h5>
                    <p className="card-text fw-medium">
                      Rs.{menu.Price}.00
                      
                    </p>
                    <p className="card-text fw-medium">{menu.category}
                   </p>
                    <a
                      href="#"
                      className="btn btn-danger "
                      data-bs-toggle="modal"
                      data-bs-target="#Modal"
                      onClick={() => setIdToDelete(menu._id)}
                    >
                      Delete Item
                    </a>
                    <a className="btn btn-primary"
                      onClick={() => getUpdateMenu(menu._id)}
                      href="/updateMenu"
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
                Are you sure you want to delete this Menu Item?
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