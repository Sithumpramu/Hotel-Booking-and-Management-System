import useUpdateMenu from "../../hooks/useUpdateMenuItem";
import React, { useState } from "react";
import useMenuList from "../../hooks/useMenu";

function Updatemenu(){
    const { updateMenuItem } = useUpdateMenu();
    const [productName, setProductName] = useState("");
    const [Price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const { menuList, isLoading, error } = useMenuList();
    const [ID, setIdToUpdate] = useState("");



const handleupdate = async (ID) => {

    setIdToUpdate('');
    await updateMenuItem(ID)

  }
    return(
        <div className="row">
           
              <div className="col">
                <div>
                  <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
                    <form
                      onSubmit={handleupdate}
                      method="Post"
                      style={{ width: "18rem" }}
                    >
                      <div className="mb-3">
                        <label for="ProductName" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ProductName"
                        //   value={menu.productName}
                          onChange={(e) => {
                            setProductName(e.target.value);
                          }}
                        />
                      </div>

                      <div class="mb-3">
                        <label className="form-label">Price</label>
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </div>

                      <div class="mb-3">
                        <label className="form-label">category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="category"
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                      </div>





                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="submit"
                        onClick={() => {
                        
                        }}
                      >
                        Submit
                      </button>

                      <p id="Error"></p>
                    </form>
                  </div>
                </div>
              </div>
             
            </div>
    )
}

export default Updatemenu;