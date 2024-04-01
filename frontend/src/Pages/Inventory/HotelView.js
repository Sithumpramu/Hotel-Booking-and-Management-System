import React, { useEffect, useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios';

const HotelView = () => {
    const [state, setState] = useState({
        inventory: []
    })

    useEffect(() => {
        axios.get("http://localhost:8000/inventory/").then(res =>{
            if(res.data){
              setState({
                inventory:res.data
              })
            }
          })
        }, [state]);
  return (
    <>
      <div class="col">
          <Header dashboard={"Room Inventory Management System"} />
      </div>
      <div class="container-fluid">
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
                    </div>
                    </td>
                    </tr>
                ))}
                </tbody>
                </table>

            </div>
        </div>
      </div>
    </>
  )
}

export default HotelView