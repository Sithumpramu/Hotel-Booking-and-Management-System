import { useState } from "react";
import useAddStock  from "../../hooks/useAddStock";

const AddStock = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const { addStock, isLoading, error } = useAddStock();

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await addStock(name, category,quantity, price,description)
      }

      function validation()
        { 
            var submit = document.getElementById("submit");

            if(name ==='' && category ==='' && quantity ==='' && price ==='' && description ===''){
                // document.getElementById("emailError").innerHTML = "Can't be empty";
                 
                document.getElementById("Error").innerHTML = "All fields must be filled.";
                
              }
        }

    return(
        <div>
        <div className="d-flex align-items-center justify-content-center mb-3 mt-5" >
            <form onSubmit={handleSubmit} method='Post' style={{ width: "18rem" }}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Category</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setCategory(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Quantity Available</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setQuantity(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Latest Price Purchased at</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setPrice(e.target.value);}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Special Notes</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setDescription(e.target.value);}}/>
                </div>
                <button type="submit" className="btn btn-primary" id="submit" onClick={() => { validation(); }}>Submit</button>

                <p id="Error"></p>
            </form>
        </div>

        
        </div>

    )}

    export default AddStock;