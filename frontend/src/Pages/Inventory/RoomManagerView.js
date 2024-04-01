import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RoomManagerView = () => {
    const [state, setState] = useState({
        inventory: []
    })

    useEffect(() => {
        axios.get("http://localhost:4000/inventory/").then(res =>{
            if(res.data){
              setState({
                inventory:res.data
              })
            }
          })
        }, [state]);
      
      
        const onDelete = (id) => {
          axios.delete(`http://localhost:4000/inventory/delete/${id}`)
          .then((res) => {
            alert("Deleted successfully");
            
          })
        }
        
  return (
    <>
      <div class="col">
          {/* <Header dashboard={"Room Inventory Management System"} /> */}
      </div>
      <div class="container-fluid pt-5">
        <div class="row flex-nowrap">
          <div class="col py-3">

            {/* details */}
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Unit_Price</th>
                    <th scope="col">Stock Count</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {state.inventory.map((inventory, index) => (
                    <tr key={index}>
                    <td>{inventory.itemID}</td>
                    <td>{inventory.itemName}</td>
                    <td>{inventory.description}</td>
                    <td>{inventory.unit_price}</td>
                    <td>{inventory.stockCount}</td>
                    <td>
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-success btn-sm">
                        <a href={`/pages/inventory/edit/${inventory._id}`} style={{textDecoration: 'none', color:'white'}}>
                            update
                        </a>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => onDelete(inventory._id)}>Delete</button>
                    </div>
                    </td>
                    </tr>
                ))}
                </tbody>
                </table>

                <button className='btn btn-primary'>
                <a href="/pages/inventory/add" style={{textDecoration: 'none', color:'white'}}>
                    create new Item
                </a>
            </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default RoomManagerView