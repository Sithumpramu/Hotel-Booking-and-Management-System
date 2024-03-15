import { useState } from "react"
import { FaUsers, FaUserCog } from 'react-icons/fa';
import { useLogout } from '../../hooks/useLogout'
import { IoMdCalendar, IoMdSettings } from 'react-icons/io';

function AdminDash(){
  const {logout}=useLogout()

const handlelogout = ()=>{
    logout()
  }

return(

<div className=" bg-info-subtle vh-100 row m-0 p-0">
<div className="col-3 m-0 p-0">
<ul className="nav flex-column bg-black vh-100">
<img src="logo.jpg"style={{width:"150px", position:"relative", left:"107px"}} className="mt-4"></img>
<div className="d-flex flex-column bg-info h-25 mt-5 justify-content-around">
  <li className="nav-item ">
    <a className="nav-link active" aria-current="page" href="#">Manage Users</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Manage Staff</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#">Create Staff</a>
  </li>
</div>
</ul>
</div>
<div className="col">
  <div className="row h4 mb-5" style={{height:"75px"}}>
  <div className="text-end"><a href ="" id="userStatus" className="btn btn-secondary ms-4 mt-2" onClick={handlelogout}>Logout</a></div>
    <div><p>Admin Dashboard</p></div>
   </div>
  <div className="row d-flex justify-content-around h-25">
    <div className="bg-primary col-2 pt-4"><FaUsers size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Staffmanage">Staff Management</a></div>
    <div className="bg-primary col-2  pt-4 "><FaUserCog size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="#">User Management</a></div>
    <div className="bg-primary col-2  pt-4"><IoMdSettings size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="#">Account Manage</a></div>
  </div> 
    
</div>
</div>
  
);

}

export default AdminDash