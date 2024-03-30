import { useState } from "react";
import useAddNew  from "../../hooks/useAddNew";

const AddNew = () => {
    const [Activity, setName] = useState('')
    const [Time, setTime] = useState('')
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const { addActivity, isLoading, error } = useAddNew();

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await addActivity(Activity, Time,Price,Description)
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
            <form onSubmit={handleSubmit} method='Post'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Activity Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Time</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTime(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setPrice(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setDescription(e.target.value);}}/>
                </div>
                <button type="submit" class="btn btn-primary" id="submit" onClick={() => { validation(); }}>Submit</button>

                <p id="Error"></p>
            </form>
        </div>

    )}

    export default AddNew;