import { useState } from "react";
import useAddMenu from "../../hooks/useAddMenu";

const AddNewMenu = () => {
  const [productName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [Image, setImage] = useState("");

  const { addMenu, isLoading, error } = useAddMenu();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addMenu(productName, Price, category, Image);
  };

  function validation() {
    var submit = document.getElementById("submit");

    if (productName === "" && Price === "" && category === "" ) {
      // document.getElementById("emailError").innerHTML = "Can't be empty";

      document.getElementById("Error").innerHTML = "All fields must be filled.";
    }
  }

  return (
    <div className="row">
      <div className="col">
        <div>
        <h2>Add New Item</h2>
          <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
            
            <form
              onSubmit={handleSubmit}
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

              <div class="mb-3">
                <label for="formFile" className="form-label">
                  Image File
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>

              

              <button
                type="submit"
                className="btn btn-primary"
                id="submit"
                onClick={() => {
                  validation();
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
  );
};

export default AddNewMenu;
