import React, { useState } from 'react';

import useActivityList from "../../hooks/useActivityList";
import useActivityDelete from '../../hooks/useDeleteActivity';

function WatersportManage(){
    const { ActivityList,isLoading, error } = useActivityList();
    const {deleteActivity} = useActivityDelete();
    const [nameToDelete, setNameToDelete] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    

      
    const handleDelete = async (Activity) => {
      await deleteActivity(nameToDelete) 
      setNameToDelete('');  
    }

    return(
        <div>
          <div>
              <h1>Watersport Activities</h1>

              
              <a href="/AddActivity" className="btn btn-primary mb-5" >Add New Activity</a>
              

              <div className="d-flex align-items-center justify-content-around mb-3" >

              {ActivityList.map(Watersport => (

              <div className="card" style={{width: "18rem"}}>
                  
                  <div class="card-body">
                      <img src="..." class="card-img-top" alt="..."/>
                      <h5 class="card-title">{Watersport.Activity}</h5>
                      <p class="card-text">{Watersport.Time}</p>
                      <p class="card-text">{Watersport.Price}</p>
                      <p class="card-text">{Watersport.Description}</p>
                     
                      <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal" onClick={() =>  setNameToDelete(Watersport.Activity)}>Delete</a>
                  </div>
                
              </div>
              
              ))}
       
              </div>
          </div>
    

          {/* model  */}
          <div className="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">CAUTION</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              Are you sure you want to delete this user?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               
                 <form action=""  method="delete">
                  
                  <button  className="btn btn-outline-danger" onClick={handleDelete}>DELETE</button>
                
                 </form>
              
              </div>
            </div>
          </div>
          </div>
          </div>
    )                    
}

export default WatersportManage;
