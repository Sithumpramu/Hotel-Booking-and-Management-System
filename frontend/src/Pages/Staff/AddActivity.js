import { useState } from "react";
import useAddNew  from "../../hooks/useAddNew";

const AddNew = () => {
    const [Activity, setName] = useState('')
    const [Time, setTime] = useState('')
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const [Image, setImage] = useState('')
    const { addActivity, isLoading, error } = useAddNew();

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await addActivity(Activity, Time,Price,Description,Image)
      }

      function validation()
        { 
            var submit = document.getElementById("submit");

            if(Activity ==='' && Time ==='' && Price ==='' && Description ===''){
                // document.getElementById("emailError").innerHTML = "Can't be empty";
                 
                document.getElementById("Error").innerHTML = "All fields must be filled.";
                
              }
        }

    return(
        <div>
        <div className="d-flex align-items-center justify-content-center mb-3 mt-5" >
            <form onSubmit={handleSubmit} method='Post' style={{ width: "18rem" }}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Activity Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Time</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTime(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setPrice(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setDescription(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange={(e)=>{setImage(e.target.files[0]);}}/>
                </div>
                <button type="submit" className="btn btn-primary" id="submit" onClick={() => { validation(); }}>Submit</button>

                <p id="Error"></p>
            </form>
        </div>

        
        </div>

    )}

    export default AddNew;