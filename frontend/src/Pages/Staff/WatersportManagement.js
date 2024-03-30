function Watersport(){
    const { ActivityList,isLoading, error } = useActivityList();
    const {deleteActivity} = useActivityDelete()
    //const [emailToDelete, setEmailToDelete] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

      const handledelete = async (email) => {
        await deleteUser(emailToDelete) 
        setEmailToDelete('');
      }

    return(
          <div>
              <h1>Watersport Activities</h1>

              <button className="btn btn-primary">Add New Activity</button>

              <div class="card" style={{width: "18rem"}}>
                {ActivityList.map(Watersport => (
                  
                  <div class="card-body">
                      <img src="..." class="card-img-top" alt="..."/>
                      <h5 class="card-title">{Watersportatersports.Activity}</h5>
                      <p class="card-text">{Watersport.Time}</p>
                      <p class="card-text">{Watersportatersports.Price}</p>
                      <p class="card-text">{Watersports.Description}</p>
                      <a href="#" class="btn btn-primary">Delete</a>
                  </div>
                ))}
              </div>
       
    
          </div>
          )
                
}

export default Watersport;
