import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        itemID: "",
        itemName: "",
        description: "",
        unit_price: "",
        stockCount: "",
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const 
        {
            itemID, 
            itemName, 
            description,
            unit_price,
            stockCount
        } = state;
    
        const data = {
            itemID: itemID,
            itemName: itemName,
            description: description,
            unit_price: unit_price,
            stockCount: stockCount,
        }
        console.log(data);
    
        axios.post("http://localhost:8000/inventory/add", data)
        .then((res) => {
          alert("Item added to inventory");
          navigate(-1);
        })
      }
    
  return (
    <>
    <div class="col">
        {/* <Header dashboard={"Room Inventory Management System"} /> */}
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Inventory Add 
                    </span>
                </h4>
            </div>
          
    {/* table */}
  <div class="row mb-5">
    <div class="col">
        <label class="form-label">ItemID</label>
        <input 
        type="text"
        name="itemID" 
        className='form-control'
        placeholder="Enter itemID"
        value={state.itemID}
        onChange={handleChange}
        />
    </div>
    <div class="col-6">
    <label class="form-label">ItemName</label>
        <input 
        type="text"
        name="itemName" 
        className='form-control'
        placeholder="Enter itemName"
        value={state.itemName}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">description</label>
        <input 
        type="text"
        name="description" 
        className='form-control'
        placeholder="Enter the description"
        value={state.description}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">unit_price</label>
        <input 
        type="text"
        name="unit_price" 
        className='form-control'
        placeholder="Enter the unit price"
        value={state.unit_price}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Stock Count</label>
        <input 
        type="text"
        name="stockCount" 
        className='form-control'
        placeholder="Enter stockCount of the post"
        value={state.stockCount}
        onChange={handleChange}
        />
    </div>

  <button className='btn btn-success mt-5' type='submit' onClick={onsubmit}>
         Save
      </button>
</div>

          </div>
      </div>
    </div>
  </>
  )
}

export default AddItem