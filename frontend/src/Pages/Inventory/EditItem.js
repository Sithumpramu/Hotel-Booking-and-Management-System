import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditItem = () => {
    const params = useParams();
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
        
        
    
        axios.put(`http://localhost:4000/inventory/update/${params.id}`, data)
        .then((res) => {
          alert("Data submited successfully");
          navigate(-1);
        })
      }
      
      useEffect(() => {
        axios.get(`http://localhost:4000/inventory/get/${params.id}`).then((res) => {
          if(res.data){
            setState({
              itemID: res.data.itemID,
              itemName: res.data.itemName,
              description: res.data.description,
              unit_price: res.data.unit_price,
              stockCount: res.data.stockCount,
            })
            
          }
        })
      },[params.id]);
    
  return (
    <>
    <div class="col">
        {/* <h1 dashboard={"Room Inventory Management System"} /> */}
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
          

  <div class="row mb-5">
    <div class="col">
        <label class="form-label">ItemNo</label>
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
        placeholder="Enter description"
        value={state.description}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Unit_Price</label>
        <input 
        type="text"
        name="unit_price" 
        className='form-control'
        placeholder="Enter unit_price"
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
export default EditItem