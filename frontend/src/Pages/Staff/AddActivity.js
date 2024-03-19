import { useState } from "react"
import { addNew } from "../hooks/addNew"

const AddActivity = () => {
    const [Activity, setName] = useState('')
    const [Time, setTime] = useState('')
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await AddActivity(Activity, Time,Price,Description)
      }

function myfunction(){
    return(
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Activity Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Time</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )}
}
    export default AddActivity;