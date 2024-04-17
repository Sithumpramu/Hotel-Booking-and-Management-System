import { useState } from "react";
import useAddNew from "../../hooks/useAddNew";
import ReceptionNavbar from "../../components/receptionNavbar";

const AddNew = () => {
  const [Activity, setName] = useState("");
  const [Time, setTime] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [qtyPerRound, setqtyPerRound] = useState("");
  const [ExtraPrice, setExtraPrice] = useState("");
  const [Image, setImage] = useState("");
  const { addActivity, isLoading, error } = useAddNew();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addActivity(Activity, Time, Price, Description, qtyPerRound, ExtraPrice, Image);
  };

  function validation() {
    let valid = true;
    const errorMessages = [];

    if (!Activity || !Time || !Price || !qtyPerRound || !Image) {
      errorMessages.push("All fields must be filled.");
      valid = false;
    }

    document.getElementById("Error").innerHTML = errorMessages.join(" ");
    return valid;
  }

  return (
    <div className="row">
      <ReceptionNavbar />
      <div className="col">
        <div>
          <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
            <form
              onSubmit={handleSubmit}
              method="Post"
              style={{ width: "18rem" }}
            >
                
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Activity Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  min="0"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="qtyPerRound" className="form-label">
                  Qty Per Round
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="qtyPerRound"
                  min="0"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setqtyPerRound(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="ExtraPrice" className="form-label">
                Extra Person Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ExtraPrice"
                  min="0"
                  onChange={(e) => {
                    setExtraPrice(e.target.value);
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

export default AddNew;
