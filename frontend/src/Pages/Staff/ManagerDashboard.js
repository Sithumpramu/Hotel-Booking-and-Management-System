import { useLogout } from '../../hooks/useLogout';

function Dashboard(){
  const {logout}=useLogout()

  const handlelogout = ()=>{
    logout()
  }
    return(
      <div>
        <div className="border border-3 pb-3" style={{backgroundColor:" #f8f9fa"}}>        
        <h3 className="my-5">Welcome to Manager Dashboard!</h3>
        <div className=""><a href ="" id="userStatus" className="btn" sty onClick={handlelogout} style={{backgroundColor:"rgb(85, 180, 254)", position:"relative", top:"0px"}}>Logout</a></div>
      
        </div>
        <div class="d-grid gap-2 col-3 mx-auto" style={{position:"relative" ,top:"140px"}}>
          <a href="" className="btn btn-outline-primary mb-3 lh-lg" type="button">Room Manager</a>
          <a href="" className="btn btn-outline-primary mb-3 lh-lg" type="button">Restaurant Manager</a>
          <a href="" className="btn btn-outline-primary mb-3 lh-lg" type="button">Event & Activity manager</a>
        </div>
        <div>
       
        </div>
      </div>
      

      

    
    )
}

export default Dashboard;