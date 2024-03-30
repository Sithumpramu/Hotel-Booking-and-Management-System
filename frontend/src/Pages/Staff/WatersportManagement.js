import React from 'react';
import useActivityList from "../../hooks/useActivityList";
import useActivityDelete from "../..hooks/useDeleteActivity";

function WatersportManage(){
    const { ActivityList,isLoading, error } = useActivityList();
    const {deleteActivity} = useActivityDelete();
    //const [emailToDelete, setEmailToDelete] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleDelete = async (activityId) => {
      await deleteActivity(activityId) 
      
    }

    return(
          <div>
              <h1>Watersport Activities</h1>

              
              <a href="/AddActivity" className="btn btn-primary mb-5" >Add New Activity</a>
              

              <div className="d-flex align-items-center justify-content-around mb-3" >

              {ActivityList.map(Watersport => (

              <div className="card" key={Watersport.id} style={{width: "18rem"}}>
                  
                  <div class="card-body">
                      <img src="..." class="card-img-top" alt="..."/>
                      <h5 class="card-title">{Watersport.Activity}</h5>
                      <p class="card-text">{Watersport.Time}</p>
                      <p class="card-text">{Watersport.Price}</p>
                      <p class="card-text">{Watersport.Description}</p>
                     
                      <a href="#" class="btn btn-primary" onClick={() =>  handleDelete(Watersport.id)}>Delete</a>
                  </div>
                
              </div>
              
              ))}
       
              </div>
          </div>
          )              
}

export default WatersportManage;
